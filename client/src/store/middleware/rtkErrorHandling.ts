import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify';
import { logOut } from '../../services/lsService';
import { routes } from '@/configs';
// import { createBrowserHistory } from "@remix-run/router";
/**
 * Log a warning and show a toast!
 */

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    if (action.type.endsWith('rejected')) {
      const statusCode = action?.payload?.data?.statusCode;
      if (statusCode === 401 || statusCode === '401') {
        console.warn('We got a rejected action!');
        window.location.href = routes.login.path;
        logOut();
      }
    }
    return next(action);
  }