import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify';
import { routes } from '../../services/configs';
import { logOut } from '../../services/lsService';
// import { createBrowserHistory } from "@remix-run/router";
/**
 * Log a warning and show a toast!
 */

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    // const history = createBrowserHistory();

    if (action.type.endsWith('rejected')) {
      const statusCode = action?.payload?.data?.statusCode;
      // const message = action?.payload?.data?.message;
      if (statusCode === 401 || statusCode === '401') {
        console.warn('We got a rejected action!');
        // toast.error(message)
        window.location.href = routes.login.path;
        logOut();
        // history.push(routes.login.path, {
        //   url: history.createHref(history.location),
        // });
        // onUnauthorized(action.payload, history)
      }
      // if (statusCode) {
      //   throw new Error(action?.payload)
      // }
    }
    return next(action);
  }