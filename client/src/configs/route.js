const routes = {
  home: {
    path: '/',
    title: 'pages.home'
  },
  login: {
    path: '/login',
    title: 'pages.login'
  },
  loginGuest: {
    path: '/login/guest',
    title: 'pages.login'
  },
  registration: {
    path: '/registration',
    title: 'pages.registration'
  },
  registrationGuest: {
    path: '/registration/guest',
    title: 'pages.registration'
  },
  users: {
    path: '/users',
    title: 'pages.users'
  },
  user: {
    path: '/users/:id',
    title: 'pages.user'
  },
  products: {
    path: '/products',
    title: 'pages.products'
  },
  productEdit: {
    path: '/products/:id',
    title: 'pages.product'
  },
  productCreate: {
    path: '/products/create',
    title: 'pages.createProduct'
  },
}

export default routes;