import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { CollectPayloadService } from 'src/payloadHelper/collectPayload.service';
import { Product } from 'src/products/products.model';
import { ProductsService } from 'src/products/products.service';
import { FAVORITE_PRODUCTS_REPOSITORY, SEQUELIZE, USER_FAVORITE_PRODUCTS_REPOSITORY } from 'src/shared/constants';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { CreateFavoriteProductByIdDto, CreateFavoriteProductDto } from './dto/create-favorite-product.dto';
import { GetFavoriteProductsDto } from './dto/favorite-product.dto';
import { FavoriteProduct } from './favoriteProducts.model';
import { UserFavoriteProducts } from './user-favoriteProducts.model';

@Injectable()
export class FavoriteProductsService {
  constructor(
    @Inject(FAVORITE_PRODUCTS_REPOSITORY) private favoriteProductRepository: typeof FavoriteProduct,
    @Inject(USER_FAVORITE_PRODUCTS_REPOSITORY) private userFavoriteProductRepository: typeof UserFavoriteProducts,
    private productService: ProductsService,
    private userService: UsersService,
    private readonly collectPayload: CollectPayloadService,
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize,
  ) {}

  async getAllFavoriteProducts(req: Request): Promise<GetFavoriteProductsDto> {
    const payload = this.collectPayload.getListPayload(req);
    payload.include = [{ model: Product }, { model: User }];
    const { rows, count } = await this.favoriteProductRepository.findAndCountAll(payload);
    return { count: count, data: rows };
  }

  async createFavoriteProduct(dto: CreateFavoriteProductByIdDto) {
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const product = await this.productService.getProduct({ userId: dto.userId, id: dto.productId });
      if (!product) {
        throw new NotFoundException();
      }
      const payload = {
        storedProductName: product.name,
        storedProductDescription: product.description,
        storedProductPrice: product.price,
        storedProductCurrency: product.currency,
        storedProductProvince: product.province,
        storedProductCity: product.city,
        storedProductAddress: product.address,
        storedProductOtherInfo: product.otherInfo,
        storedProductIntendedFor: product.intendedFor,
        storedProductState: product.productState,
        storedProductCategoryId: product.categoryId,
        storedProductUserId: product.userId,
        storedProductId: product.id,
        productId: dto.productId,
      };
      const newFavoriteProduct = await this.favoriteProductRepository.create(payload, { transaction });
      await this.userFavoriteProductRepository.create(
        { userId: `${dto.userId}`, favoriteProductId: `${newFavoriteProduct.id}` },
        { transaction },
      );

      await transaction.commit();
      return newFavoriteProduct;
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
      }
      console.log('err = ', err);
      throw new BadRequestException();
    }
  }

  async deleteFavoriteProduct(id: string) {
    const product = await this.favoriteProductRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException();
    }
    const result = await this.favoriteProductRepository.destroy({ where: { id } });
    return result;
  }
}
