import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../categories.model';

export class CategoryDto {
  @ApiProperty({ example: '1', description: 'Unique id' })
  readonly id: number;

  @ApiProperty({ example: 'OTHER', description: 'Category name' })
  readonly name: string;

  @ApiProperty({ example: 'Description', description: 'Category description' })
  readonly description: string;
}

export class GetCategoriesDto {
  @ApiProperty({ type: [Category] })
  readonly data: Category[];

  @ApiProperty()
  readonly count: number;
}
