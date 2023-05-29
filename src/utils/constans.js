export const namePattern = "[a-zA-Zа-яА-Я0-9 -]{2,30}";
export const emailPattern = "[a-z0-9]{2,30}@[a-z]{2,8}\\.[a-z]{2,4}";

export const errorMessage = {
  errorLogin: "Неверный логин или пароль",
  errorConflictEmail: "Пользователь с данным email уже существует",
  errorRegister: "При регистрации произошла ошибка",
  errorUpdateUser: "При обновлении данных произошла ошибка",
  successUpdateUser: "Данные изменены"
}

export const moviesCount = {
  desktopCount: 12,
  mobileCoint: 5,
  moreDesktopButtonCount: 3,
  moreMobileButtonCount: 2,
}

export const movieShortDuration = 40;