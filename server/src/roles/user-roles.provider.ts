import { USER_ROLE_REPOSITORY } from 'src/shared/constants';
import { UserRoles } from './user-roles.model';

export const userRolesProviders = [
  {
    provide: USER_ROLE_REPOSITORY,
    useValue: UserRoles,
  },
];
