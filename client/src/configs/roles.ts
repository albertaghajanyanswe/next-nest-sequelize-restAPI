import { UserRole } from "./shared/types";

const routesAccess = {
  home: {
    access: [UserRole.Guest, UserRole.User, UserRole.Admin]
  },
  users: {
    access: [UserRole.Guest, UserRole.User, UserRole.Admin]
  },
  products: {
    access: [UserRole.Guest, UserRole.User, UserRole.Admin]
  },
  settings: {
    access: [UserRole.Guest, UserRole.User, UserRole.Admin]
  },
};

export {routesAccess};