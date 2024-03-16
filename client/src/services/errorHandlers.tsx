import { routes } from '@/configs';

export default function onUnauthorized(error: any, reactRouterHistory: any) {
  // logOut();
  if (reactRouterHistory && reactRouterHistory.location &&
    reactRouterHistory.location.pathname &&
    (reactRouterHistory?.location?.pathname !== routes.login.path)) {
    reactRouterHistory.push(routes.login.path, {
      url: reactRouterHistory.createHref(reactRouterHistory.location),
    });
  }
}
