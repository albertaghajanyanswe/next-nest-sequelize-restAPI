import { Inject, Injectable } from '@nestjs/common';
import { CollectPayloadService } from 'src/payloadHelper/collectPayload.service';
import { CATEGORY_REPOSITORY } from 'src/shared/constants';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategoriesDto } from './dto/get-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CATEGORY_REPOSITORY) private categoryRepository: typeof Category,
    private readonly collectPayload: CollectPayloadService,
  ) {}

  async getAllCategories(req: Request): Promise<GetCategoriesDto> {
    const payload = this.collectPayload.getListPayload(req, false);
    const { rows, count } = await this.categoryRepository.findAndCountAll(payload);
    return { count: count, data: rows };
  }

  async createCategory(dto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(dto);
    return category;
  }

  async getCategoryByName(name: string) {
    const category = await this.categoryRepository.findOne({ where: { name } });
    return category;
  }
}
