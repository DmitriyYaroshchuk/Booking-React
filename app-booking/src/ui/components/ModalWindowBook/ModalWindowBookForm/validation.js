export const validation = {
  required: (value) => (value ? undefined : 'Requrid field'),
  validateName: (value) => (/^[A-Za-zА-Яа-яЁё-]{2,30}$/.test(value) ? undefined : 'Check your name'),
  validateEmail: (value) => (/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(value) ? undefined : 'Check your email'),
  validatePassport: (value) => (/^[A-Za-z0-9]{6,15}$/.test(value) ? undefined : 'Check your passport'),
  validatePhone: (value) => (/^\+?[0-9\s-()]{7,20}$/.test(value) ? undefined : 'Check your number of phone'),
};
export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
