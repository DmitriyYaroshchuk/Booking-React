const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const validation = {
  required: (value) => (value ? undefined : 'Required field'),
  checkEmail: (value) => (regExp.test(value) ? undefined : 'Check your field'),
};
export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
