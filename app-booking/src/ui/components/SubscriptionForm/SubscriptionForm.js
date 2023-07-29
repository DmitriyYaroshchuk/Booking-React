import { Field } from 'react-final-form';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import { composeValidators, validation } from './validation';
import { Wrapper } from './styles';

export default function SubscriptionForm(props) {
  const { handleSubmit, pristine, form } = props;
  return (
    <Wrapper
      component="form"
      onSubmit={(event) => {
        handleSubmit(event);
        form.reset();
      }}
      sx={{ alignItems: 'baseline' }}
    >
      <Field
        label="Email"
        name="email"
        component={TextField}
        validate={composeValidators(validation.required, validation.checkEmail)}
        placeholder="Введите вашу электронную почту"
        sx={{
          maxWidth: '260px',
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '4px',
          '& .MuiFormHelperText-root.Mui-error': {
            backgroundColor: '#00224f',
            margin: 0,
          },
        }}
      />
      <Button
        type="submit"
        disabled={pristine}
        sx={{
          backgroundColor: '#4a00b6',
          transition: 'transition: 0.3s color ease-in-out',
          '&:disabled': {
            backgroundColor: 'rgba(74,0,182,0.3)',
            color: 'rgba(255,255,255,0.4)',
          },
          '&:hover': { backgroundColor: '#33007e' },
        }}
      >Подписаться
      </Button>
    </Wrapper>
  );
}
