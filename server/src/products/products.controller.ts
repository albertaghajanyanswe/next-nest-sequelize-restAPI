import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { AuthGuard } from '@nestjs/passport';
import { GetProductsDto, ProductDto } from './dto/product.dto';
import { CurrentUser } from 'src/shared/decorators/currentUser.decorator';
import { User } from 'src/users/users.model';

@ApiTags('Products')
@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 200, type: ProductDto })
  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getProductById(@CurrentUser() currentUser: User, @Param('id') id: string) {
    return this.productService.getProductById(id, currentUser.id);
  }

  @ApiOperation({ summary: 'Get all product' })
  @ApiResponse({ status: 200, type: GetProductsDto })
  @UseGuards(AuthGuard('jwt'))
  @Get()
  // getAll(@Req() request: Request, @Query('params') params: string) {
  getAll(@Req() request: Request) {
    return this.productService.getAllProducts(request);
  }

  @ApiOperation({ summary: 'Create new product' })
  @ApiResponse({ status: 200, type: ProductDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Req() request, @Body() productDto: CreateProductDto) {
    return this.productService.createProduct({ ...productDto, userId: request.user.id });
  }

  @ApiOperation({ summary: 'Update product' })
  @ApiParam({ name: 'id', type: Number, description: 'Product id' })
  @ApiResponse({ status: 200, type: Product })
  @Put('/:id')
  updateProduct(@Param('id') id, @Body() productDto: CreateProductDto) {
    return this.productService.updateProduct(productDto, id);
  }
}
