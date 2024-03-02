import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { iRegistrationGuest, IUser } from '../../configs/shared/types';
import userService from '../../services/usersService';
import { queryFnKeys } from './reactQueryFnKeys';

const userQueryFnKeys = queryFnKeys.users;

const useUsers = () => {
  return useQuery([userQueryFnKeys.users], (params) => userService.getUsers<IUser[]>(params), {
    select: (data) => data,
  })
}

const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation([userQueryFnKeys.addUsers], (data: iRegistrationGuest) => userService.createUser({data}), {
    onSuccess() {
      queryClient.invalidateQueries([userQueryFnKeys.users])
    },
  })
}

export { useUsers, useCreateUser };