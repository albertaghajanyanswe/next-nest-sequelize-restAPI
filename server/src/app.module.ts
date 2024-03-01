import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { RolesModule } from './roles/roles.module';
// import { MailerService } from './mailer/mailer.service';
import { MulterModule } from '@nestjs/platform-express';
import { multerOptions } from './files/multer.config';
import { UploadController } from './files/uploads.controller';
import { FileController } from './files/files.controller';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { ProductsImageModule } from './productImages/productsImage.module';
import { productsImageProviders } from './productImages/productsImage.providers';
import { FavoriteProductsModule } from './favoriteProducts/favoriteProducts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register(multerOptions),
    DatabaseModule,
    UsersModule,
    RolesModule,
    CategoriesModule,
    ProductsModule,
    ProductsImageModule,
    FavoriteProductsModule,
    AuthModule,
  ],
  controllers: [UploadController, FileController],
  providers: [...productsImageProviders],
})
export class AppModule {}
