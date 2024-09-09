import { User } from '@/generated/openapi';

function decorateShowField<T extends readonly any[]>(ar: T) {
  return ar as readonly (T[number] & {
    show: (data: { currentUser?: User }) => boolean;
  })[];
}

// Users table data
function adaptUsersTableData(data: User[]) {
  return data.map((item) => {
    return {
      id: item?.id,
      firstName: item?.firstName,
      lastName: item?.lastName,
      email: item?.email,
    };
  });
}

export type UsersTableDataType = ReturnType<typeof adaptUsersTableData>[number];

export { adaptUsersTableData, decorateShowField };
