import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './categories.model';
import { AuthGuard } from '@nestjs/passport';
import { GetCategoriesDto } from './dto/get-categories.dto';

@ApiTags('Categories')
@ApiBearerAuth()
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) { }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: GetCategoriesDto })
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllCategories(@Req() request: Request) {
    return this.categoryService.getAllCategories(request);
  }

  @ApiOperation({ summary: 'Create new category' })
  @ApiResponse({ status: 200, type: Category })
  @Post()
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(categoryDto);
  }

  @ApiOperation({ summary: 'Get category by value' })
  @ApiResponse({ status: 200, type: Category })
  @Get('/:value')
  getCategoryByValue(@Param('value') value: string) {
    return this.categoryService.getCategoryByName(value);
  }
}
