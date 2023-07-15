export const validation = {
  required: (value) => (value ? undefined : 'Required field'),
  onlyNumbers: (value) => (/[0-9]/.test(value) ? undefined : 'Only numbers'),
};
export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
