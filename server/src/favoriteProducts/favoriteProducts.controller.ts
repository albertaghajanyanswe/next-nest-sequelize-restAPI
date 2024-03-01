import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFavoriteProductByIdDto, CreateFavoriteProductDto } from './dto/create-favorite-product.dto';
import { DeleteDto, FavoriteProductDto, GetFavoriteProductsDto } from './dto/favorite-product.dto';
import { FavoriteProduct } from './favoriteProducts.model';
import { FavoriteProductsService } from './favoriteProducts.service';

@ApiTags('FavoriteProduct')
@ApiBearerAuth()
@Controller('favoriteProducts')
export class FavoriteProductsController {
  constructor(private favoriteProductsService: FavoriteProductsService) {}

  @ApiOperation({ summary: 'Get all favorite products' })
  @ApiResponse({ status: 200, type: GetFavoriteProductsDto })
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll(@Req() request: Request) {
    return this.favoriteProductsService.getAllFavoriteProducts(request);
  }

  @ApiOperation({ summary: 'Create favorite products' })
  @ApiResponse({ status: 200, type: FavoriteProductDto })
  @UseGuards(AuthGuard('jwt'))
  @Post('/add')
  create(@Req() request, @Body() favoriteProductDto: CreateFavoriteProductByIdDto) {
    return this.favoriteProductsService.createFavoriteProduct({ ...favoriteProductDto, userId: request.user.id });
  }

  @ApiOperation({ summary: 'Delete favorite products' })
  @ApiResponse({ status: 200, type: DeleteDto })
  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete/:id')
  delete(@Req() request, @Param('id') id: string) {
    return this.favoriteProductsService.deleteFavoriteProduct(id);
  }
}
