// import { CreateUserDto, DefaultApi, User, UsersApi } from '../generated/openapi';
import { UploadsApi } from '@/generated/openapi';

import { axiosInstance } from '@/services/client/axiosHelper';

const PREFIX = 'api';

let uploadApi = new UploadsApi(undefined, PREFIX, axiosInstance)

const uploadService = {
  uploadFile: async ({formData}: {formData:  any}) => {
    // authApi = new DefaultApi(new Configuration({ username: data.email, password: data.password}));
    return await uploadApi.uploadControllerUploadFile({data: formData});
  },
}

export default uploadService;


