import OverviewIcon from '@/assets/sidebar/overview.svg';
import SettingsIcon from '@/assets/sidebar/settings.svg';
import BlockedIcon from '@/assets/sidebar/blocked.svg';
import { routesAccess } from '@/configs/roles';
import { routes } from '@/configs';

const links = [
  {
    id: 'home',
    title: 'home',
    link: routes.home.path,
    icon: OverviewIcon,
    disabled: false,
    roles: routesAccess.home.access,
  },
  {
    id: 'users',
    title: 'users',
    link: routes.users.path,
    icon: BlockedIcon,
    disabled: false,
    roles: routesAccess.users.access,
  },
  {
    id: 'products',
    title: 'products',
    link: routes.products.path,
    icon: BlockedIcon,
    disabled: false,
    roles: routesAccess.users.access,
  },
  {
    id: 'divider-1',
    title: '',
    link: '',
    icon: '',
    type: 'divider'
  },
  {
    id: 'settings',
    title: 'settings',
    link: routes.settings.path,
    icon: SettingsIcon,
    disabled: false,
    roles: routesAccess.settings.access,
  },

];

export { links };
