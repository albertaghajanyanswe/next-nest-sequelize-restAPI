import { apiEndpoints } from "../configs"
import { usersAPI } from "./UsersApi"

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
  }),
  overrideExisting: false,
})

export { uploadsAPI };