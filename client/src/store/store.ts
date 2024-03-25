// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from '@/store/reducers/UsersSlice';
import counterReducer from '@/store/reducers/CounterSlice';
import sidebarReducer from '@/store/reducers/SidebarSlice';
import { usersAPI } from "@/services/rtk/UsersApi";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { rtkQueryErrorLogger } from "@/store/middleware/rtkErrorHandling";
import { uploadsAPI } from "@/services/rtk/UploadsApi";
import { productsAPI } from "@/services/rtk/ProductsApi";

const rootReducer = combineReducers({
  userReducer,
  counterReducer,
  sidebarReducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
  uploads: uploadsAPI.reducer,
  [productsAPI.reducerPath]: productsAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersAPI.middleware, uploadsAPI.middleware, productsAPI.middleware, rtkQueryErrorLogger)
  })
}
setupListeners(setupStore().dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];