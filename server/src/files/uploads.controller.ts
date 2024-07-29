// src/upload/upload.controller.ts
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UseGuards,
  Request,
  Delete,
  Param,
  Body,
  Inject,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/users.service';
import { multerOptions } from './multer.config';
import * as fs from 'fs';
import { DeleteFileDto } from './delete-file.dto';
import { CreateProductImageDto } from 'src/productImages/dto/create-product-image.dto';
import { ProductsService } from 'src/products/products.service';
import { PRODUCT_IMAGE_REPOSITORY, STATIC_FILES_REPOSITORY } from 'src/shared/constants';
import { ProductImage } from 'src/productImages/productsImage.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStaticFileDto } from 'src/staticFiles/dto/staticFiles.dto';
import { StaticFiles } from 'src/staticFiles/staticFiles.model';

@ApiTags('Uploads')
@ApiBearerAuth()
@Controller('uploads')
export class UploadController {
  constructor(
    private readonly userService: UsersService,
    private readonly productService: ProductsService,
    // @InjectModel(ProductImage) private readonly productImageRepository: typeof ProductImage,
    @Inject(PRODUCT_IMAGE_REPOSITORY) private readonly productImageRepository: typeof ProductImage,
    @Inject(STATIC_FILES_REPOSITORY) private readonly staticFilesRepository: typeof StaticFiles,
  ) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadFile(@UploadedFile() file) {
    return { filename: file.filename };
  }

  @Post('/avatar')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadAvatar(@UploadedFile() file, @Request() req) {
    const user = await this.userService.findOneByEmail(req.user.email);
    if (user) {
      user.image = file.filename;
      await this.userService.updateUser({ image: file.filename }, req.user.id);
      return { filename: file.filename };
    } else {
      return { error: 'User not found' };
    }
  }

  @Delete('/avatar/delete/:filename')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete file by name' })
  @ApiParam({ name: 'link', type: String, description: 'File name' })
  @ApiResponse({ status: 200, type: DeleteFileDto })
  async deleteAvatar(@Param('filename') filename: string, @Request() req) {
    const filePath = `./uploads/${filename}`;
    try {
      fs.unlinkSync(filePath);
      await this.userService.updateUser({ image: '' }, req.user.id);
      return { message: 'File deleted successfully', success: true };
    } catch (err) {
      return { message: 'File deletion failed', success: false, error: err.message };
    }
  }

  @Post('/productImage')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadProductImage(@UploadedFile() file, @Request() req, @Body() createProductImageDto: CreateProductImageDto) {
    const product = await this.productService.getProduct({
      userId: req.user.id,
      productId: createProductImageDto.productId,
    });
    const productImageObj = {
      name: file.filename,
      productId: product?.id || null,
    };
    const newProductImage = await this.productImageRepository.create({ ...productImageObj });
    return newProductImage;
  }

  @Post('/staticFile')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadStaticFile(@UploadedFile() file, @Request() req, @Body() createStaticFileDto: CreateStaticFileDto) {
    const user = await this.userService.findOneByEmail(req.user.email);
    if (user) {
      const newStaticFile = await this.staticFilesRepository.create({ name: file.filename, userId: createStaticFileDto.userId, productId: createStaticFileDto.productId });
      return newStaticFile;

    } else {
      return { error: 'User not found' };
    }
  }
}