const en = {
  common: {
    changeLang: 'Change language',
    changeTheme: 'Change theme',
    light: 'Light',
    dark: 'Dark',
    loading: 'Loading',
    search: 'Search',
    none: 'None'
  },
  pages: {
    meetings: 'Meetings',
    home: 'Home',
    users: 'Users',
    products: 'Products',
    product: 'Product',
    createProducts: 'Products',
    settings: 'settings',
    logout: 'Logout'
  },
  sidebar: {
    welcome: 'Welcome',
    home: 'Home',
    users: 'Users',
    settings: 'Settings',
    products: 'Products',
  },
  lang: {
    english: 'English',
    russian: 'Русский',
    en: 'EN',
    ru: 'РУ'
  },
  login: {
    title: 'Sign in',
    email: 'Email',
    username: 'Username',
    password: 'Password',
    signIn: 'Sign in',
    signInGuest: 'Sign in as a guest',
    createAccount: 'Dont have an account yet ?',
    register: 'Register one',
    errors: {
      common: 'Invalid credentials!',
    },
    registerGuest: 'Register as a guest',
    nickName: 'Nick name',
    firstName: 'First name',
    lastName: 'Last name',

  },
  register: {
    title: 'Registration',
    nickName: 'Nick name',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    password: 'Password',
    phone: 'Phone number',
    backToLogin: 'Back to Sign in',
    errors: {
      common: 'Could not register new user.'
    },
    submit: 'Register',
    switchGuestAccount: 'Switch with your guest account',
    guestNickName: 'Your guest account nick name',
    guestPassword: 'Your guest account password'
  },
  table: {
    noResult: 'No result',
    rowPerPage: 'Row  per page',
    showingItems: 'Showing {first}–{second} of {count} ',
    itemSelected: 'Item selected',
  },
  filter: {
    none: 'None'
  },
  users: {
    title: 'Users',
    id: 'ID',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    nickName: 'Nick name',
    role: 'Role',
    phone: 'Phone',
    isActive: 'Is active',
    userStatus: 'User status',
    active: 'Active',
    inactive: 'In active',
    allUsers: 'All users',
  },
  profile: {
    yourPhoto: 'Your photo',
    photoDesc: 'This will be displayed on your profile',
    deleteAccount: 'Delete account',
    deleteThisAccount: 'Delete this account',
    deleteAccountDesc_1: 'This action will delete all data related to your account.',
    deleteAccountDesc_2_1: 'You ',
    deleteAccountDesc_2_2: 'won’t be able to recover',
    deleteAccountDesc_2_3: ' your account on your own.',
    deleteModal: {
      deleteAccount: 'Do you want to remove your account ?',
      remove: 'Yes, remove',
      cancel: 'No, don’t remove '
    }
  },
  products: {
    name: 'Name',
    description: 'Description',
    otherInfo: 'Other info',
    price: 'Price',
    currency: 'Currency',
    province: 'Province',
    city: 'City',
    address: 'Address',
    categoryId: 'Category ID',
    intendedFor: 'Intended for',
    intendedForOptions: {
      forSale: 'For sale',
      FOR_SALE: 'For sale',
      forRent: 'For rent',
      FOR_RENT: 'For rent',
      forFreeGiving: 'For free giving',
      FOR_FREE_GIVING: 'For free giving'
    },
    productState: 'Product state',
    productStateOptions: {
      new: 'New',
      NEW: 'New',
      used: 'Used',
      USED: 'Used',
      notOperable: 'Not operable',
      NOT_OPERABLE: 'Not operable'
    },
    emptyTitle: 'You don`t have a product yet.',
    emptyDesc: 'You will see your products here after creation.'
  },
  productItem: {
    createNewProduct: 'Create new product',
    title: 'Product'
  },
  actions: {
    login: 'Login',
    signIn: 'Sign In',
    signOut: 'Sign Out',
    cancel: 'Cancel',
    submit: 'Submit',
    search: 'Search',
    edit: 'Edit',
    delete: 'Delete',
    clickToRow: 'Click to the row',
    recoverDeletedItem: 'Recover deleted item',
    save: 'Save',
    uploadNewImage: 'Upload new image',
    createProduct: 'Create new product',
    update: 'Update',
    selectAll: 'Select all',
    view: 'View'
  },
  deleteUserModal: {
    title1: 'Do you want to remove',
    title2: '{0} from users list?',
    desc: '{0} will no longer be able to enter the platform',
    remove: 'Yes, remove',
    cancel: 'No, don’t remove ',
  },
  systemMsg: {
    failedSaveData: 'Failed to save data',
    // eslint-disable-next-line no-template-curly-in-string
    userRemoved: '${0} was removed',
  },
  actionMsg: {
    success: {
      create: 'Successfully created.',
      update: 'Successfully updated.',
      delete: 'Successfully deleted.',
      move: 'Successfully Moved.',
      operationSucceeded: 'Operation succeeded.',
    },
    error: {
      get: 'Could not get data',
      create: 'Could not create item.',
      update: 'Could not update item.',
      delete: 'Could not delete item.',
      unknownError: 'Unknown error.',
    },
  },
  validation: {
    required: '{name} is required'
  },
  errors: {
    required: '{field} field is required.',
    minChars: '{field} min length should be {count} character.',
    maxValue: '{field} max value should be {maxValue}.',
    greaterZero: '{field} value must be greater than zero.',
    incorrectEmail: 'Incorrect email format.',
    noUploadedFiles: 'No uploaded files',
    passwordMismatches: "Password confirmation doesn't match.",
    fileSizeLimit: 'Max file size should be 10 mb',
    invalidDate: 'Invalid date.',
    invalidPhone: 'Invalid phone number.',
    passwordRequirements: 'The entered password does not match the requirements.',
  },
};

export default en;
