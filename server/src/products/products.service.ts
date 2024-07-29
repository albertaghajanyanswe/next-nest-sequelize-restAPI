import { Inject, Injectable } from '@nestjs/common';
import { FavoriteProduct } from 'src/favoriteProducts/favoriteProducts.model';
import { CollectPayloadService } from 'src/payloadHelper/collectPayload.service';
import { ProductImage } from 'src/productImages/productsImage.model';
import { PRODUCT_REPOSITORY, SEQUELIZE, STATIC_FILES_REPOSITORY } from 'src/shared/constants';
import { User } from 'src/users/users.model';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsDto } from './dto/product.dto';
import { Product } from './products.model';
import { StaticFiles } from 'src/staticFiles/staticFiles.model';
import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { FAVORITE_PRODUCTS_REPOSITORY } from '../shared/constants/index';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private productRepository: typeof Product,
    @Inject(STATIC_FILES_REPOSITORY) private staticFilesRepository: typeof StaticFiles,
    @Inject(FAVORITE_PRODUCTS_REPOSITORY) private favoriteProductRepository: typeof FavoriteProduct,
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize,
    private readonly collectPayload: CollectPayloadService,
  ) { }

  async createProduct1(dto: CreateProductDto) {
    const product = await this.productRepository.create(dto);
    return product;
  }

  async createProduct(dto: CreateProductDto) {
    let transaction;

    try {
      transaction = await this.sequelize.transaction();
      const product = await this.productRepository.create(dto, { transaction });
      if (dto.staticFilesNames) {
        await this.staticFilesRepository.update(
          { fileType: 'productImage', productId: product.dataValues.id, userId: dto.userId },
          { where: { name: dto.staticFilesNames }, transaction },
        )
      }
      await transaction.commit();
      return product;
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
      }
    }
  }

  async updateProduct(dto: Partial<CreateProductDto>, id: number): Promise<Product> {
    let transaction;

    try {
      transaction = await this.sequelize.transaction();
      const product = await this.productRepository.update(dto, { where: { id }, transaction });
      await this.staticFilesRepository.update(
        { fileType: '', productId: null, userId: dto.userId },
        {
          where: {
            productId: id,
            name: {
              [Op.not]: dto.staticFilesNames
            }
          },
          transaction
        },
      )
      if (dto.staticFilesNames) {
        await this.staticFilesRepository.update(
          { fileType: 'productImage', productId: id, userId: dto.userId },
          {
            where: { name: dto.staticFilesNames },
            transaction
          },
        )
      }
      await transaction.commit();
      return this.productRepository.findOne<Product>({
        where: { id },
        include: [
          {
            model: StaticFiles,
          },
        ],
      });
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
      }
    }
  }

  async getProductById(id: string, userId: number) {
    const payload = {
      where: { id, userId },
      include: [
        {
          model: StaticFiles,
          attributes: ['id', 'name', 'userId', 'productId'],
        },
      ]
    };
    const product = await this.productRepository.findOne(payload);
    return product;
  }

  async getAllProducts(req: Request): Promise<GetProductsDto> {
    const payload = this.collectPayload.getListPayload(req);
    payload.include = [
      {
        model: StaticFiles,
        attributes: ['id', 'name', 'userId', 'productId'],
      },
      {
        model: FavoriteProduct,
      },
      {
        model: User,
        include: [
          {
            model: FavoriteProduct,
          }
        ]
      },
    ];
    const { rows, count } = await this.productRepository.findAndCountAll(payload);
    return { count: count, data: rows };
  }

  async getProduct(payload) {
    const product = await this.productRepository.findOne({ where: payload });
    return product;
  }
}
