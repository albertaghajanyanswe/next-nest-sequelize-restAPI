import { CATEGORY_REPOSITORY } from 'src/shared/constants';
import { Category } from './categories.model';

export const categoriesProviders = [
  {
    provide: CATEGORY_REPOSITORY,
    useValue: Category,
  },
];
