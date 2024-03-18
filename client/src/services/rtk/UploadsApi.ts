import { apiEndpoints } from "../configs"
import { usersAPI } from "@/services/rtk/UsersApi";

const uploadsAPI = usersAPI.injectEndpoints({
  endpoints: (build) => ({
    uploadAvatar: build.mutation<{ filename: string }, { formData: FormData }>({
      query: ({ formData }) => {
        return {
          url: `api${apiEndpoints.uploadsAvatar}`,
          method: 'POST',
          body: formData
        }
      },
      invalidatesTags: ['CurrentUser']
    }),
    deleteAvatar: build.mutation<{ filename: string }, { filename: string }>({
      query: ({ filename }) => {
        return {
          url: `api${apiEndpoints.deleteAvatar.replace(':filename', filename)}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['CurrentUser']
    }),
    uploadStaticFile: build.mutation<{ filename: string }, { formData: FormData }>({
      query: ({ formData }) => {
        // const bodyData = new FormData();
        // bodyData.append('file', formData.get('file') as any);
        // bodyData.append('userId', userId);
        // bodyData.append('productId', productId);
        return {
          url: `api${apiEndpoints.uploadsStaticFile}`,
          method: 'POST',
          body: formData
        }
      },
      invalidatesTags: ['CurrentUser']
    }),
  }),
  overrideExisting: false,
})

export { uploadsAPI };