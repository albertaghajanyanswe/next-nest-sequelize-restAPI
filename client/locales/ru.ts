const ru = {
  common: {
    changeLang: 'Изменить язык',
    changeTheme: 'Изменить тему',
    light: 'Светлый',
    dark: 'Тёмный',
    loading: 'Загрузка',
    search: 'Наити',
    none: 'Ничто'
  },
  pages: {
    home: 'Домой',
    settings: 'Настройки',
    logout: 'Выйти',
    users: 'Список всех пользователей',
    meetings: 'Встречи',
    products: 'Продукты',
    product: 'Продукт',
    createProducts: 'Создать продукт',
  },
  sidebar: {
    welcome: 'Добро пожаловать',
    home: 'Домой',
    users: 'Пользователи',
    settings: 'Настройки',
    products: 'Продукты',
  },
  lang: {
    english: 'English',
    russian: 'Русский',
    en: 'EN',
    ru: 'РУ'
  },
  login: {
    title: 'Войти',
    email: 'Электронная почта',
    username: 'Имя пользователя',
    password: 'Пароль',
    signIn: 'Войти',
    signInGuest: 'Войти как гость',
    createAccount: 'У вас еще нет учетной записи?',
    register: 'Зарегистрировать один',
    errors: {
      common: 'Неверные учетные данные!',
    },
    registerGuest: 'Зарегистрируйтесь в качестве гостя',
    nickName: 'Псевдоним',
    firstName: 'Имя',
    lastName: 'Фамилия',

  },
  register: {
    title: 'Регистрация',
    nickName: 'Псевдоним',
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Электронная почта',
    password: 'Пароль',
    backToLogin: 'Назад для входа в систему',
    errors: {
      common: 'Не удалось зарегистрировать нового пользователя',
    },
    submit: 'Зарегистрироваться',
    switchGuest: 'Переключиться с гостевой учетной записью',
    guestNickName: 'Псевдоним вашей гостевой учетной записи',
    guestPassword: 'Пароль вашей гостевой учетной записи'
  },
  table: {
    rowPerPage: 'Строки на странице',
    showingItems: 'Показаны {first}–{second} из {count}',
    itemSelected: 'Элемент выбран',
    noResult: 'Нет результата'
  },
  filter: {
    none: 'Невыбран'
  },
  users: {
    title: 'Пользователи',
    id: 'ID',
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Электронная почта',
    nickName: 'Псевдоним',
    role: 'Роль',
    phone: 'Телефон',
    isActive: 'Активен',
    userStatus: 'Статус пользователя',
    active: 'Активный',
    inactive: 'Неактивный',
    allUsers: 'Все пользователи'
  },
  profile: {
    yourPhoto: 'Ваше фото',
    photoDesc: 'Это будет отображаться в вашем профиле',
    deleteAccount: 'Удалить учетную запись',
    deleteThisAccount: 'Удалить учетную запись',
    deleteAccountDesc_1: 'Это действие приведет к удалению всех данных, связанных с вашей учетной записью.',
    deleteAccountDesc_2_1: 'Вы ',
    deleteAccountDesc_2_2: 'не сможете восстановиться',
    deleteAccountDesc_2_3: ' ваша учетная запись самостоятельно',
    deleteModal: {
      deleteAccount: 'Вы хотите удалить свою учетную запись?',
      remove: 'Да, удалить',
      cancel: 'Нет, не удалять '
    }
  },
  actions: {
    login: 'Войти',
    signIn: 'Войти',
    SignOut: 'Выйти',
    cancel: 'Отменить',
    submit: 'Отправить',
    search: 'Поиск',
    edit: 'Редактировать',
    delete: 'Удалить',
    setReminder: 'Установить время напоминания',
    changeStatus: 'Нажмите на строку, чтобы изменить статус',
    save: 'Сохранить',
    uploadNewImage: 'Загрузить новое изображение',
    createProduct: 'Создать новый продукт'
  },
  actionMsg: {
    success: {
      create: 'Успешно создано.',
      update: 'Успешно обновлено.',
      delete: 'Успешно удалено.',
      move: 'Успешно перемещено.',
      operationSucceeded: 'Операция выполнена успешно.',
    },
    error: {
      get: 'Не удалось получить данные',
      create: 'Не удалось создать элемент.',
      update: 'Не удалось обновить элемент.',
      delete: 'Не удалось удалить элемент.',
      unknownError: 'Неизвестная ошибка.',
    },
  },
  meeting: {
    title: 'Название',
    description: 'Описание',
    startDate: 'Дата начала',
    endDate: 'Дата окончания',
    createMeeting: "Создать встречу",
  },
  validation: {
    required: '{name} требуется'
  },
  errors: {
    required: 'Поле {field} является обязательным.',
    minChars: 'Минимальная длина {поля} должна составлять {count} символов.',
    maxValue: 'Максимальное значение {field} должно быть {maxValue}.',
    greaterZero: 'Значение {поля} должно быть больше нуля.',
    incorrectEmail: 'Неверный формат электронной почты.',
    noUploadedFiles: 'Нет загруженных файлов',
    passwordMismatches: "Подтверждение пароля не совпадает.",
    fileSizeLimit: 'Максимальный размер файла должен составлять 10 МБ',
    validDate: 'Неверная дата.',
    validPhone: 'Неверный номер телефона.',
    passwordRequirements: 'Введенный пароль не соответствует требованиям.',
  },
};

export default ru;
