import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { iRegistrationGuest, IUser } from '../../configs/shared/types';
import userService from '../../services/usersService';

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: '',
}

export const getUsers = createAsyncThunk(
  'api/users',
  async (params: any, thunkAPI) => {
    try {
      const users = await userService.getUsers(params)
      return users;
    } catch (err: any) {
      thunkAPI.rejectWithValue(err.message)
    }
  }
);
export const addUser = createAsyncThunk(
  'api/users/registration/guest',
  async (newUser: iRegistrationGuest, thunkAPI) => {
    try {
      await userService.createUser({ data: { ...newUser } });
    } catch (err: any) {
      thunkAPI.rejectWithValue(err.message)
    }
  }
)
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.users = action.payload as unknown as IUser[];
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    // [getUsers.pending.type]: (state, action: PayloadAction<IUser[]>) => {
    //   state.isLoading = true;
    // },
    // [getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.users = action.payload;
    // },
    // [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [addUser.pending.type]: (state, action: PayloadAction<IUser[]>) => {
    //   state.isLoading = true;
    // },
    // [addUser.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
    //   state.isLoading = false;
    //   state.error = '';
    // },
    // [addUser.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // }
  }
})



export default userSlice.reducer;