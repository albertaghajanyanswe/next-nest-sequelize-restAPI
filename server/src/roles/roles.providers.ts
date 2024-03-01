import { ROLE_REPOSITORY } from 'src/shared/constants';
import { Role } from './roles.model';

export const rolesProviders = [
  {
    provide: ROLE_REPOSITORY,
    useValue: Role,
  },
];
