import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteProductsController } from './favoriteProducts.controller';

describe('FavoriteProductsController', () => {
  let controller: FavoriteProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteProductsController],
    }).compile();

    controller = module.get<FavoriteProductsController>(FavoriteProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
