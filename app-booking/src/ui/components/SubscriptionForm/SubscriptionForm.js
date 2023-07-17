import { Field } from 'react-final-form';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import { composeValidators, validation } from './validation';
import { Wrapper } from './styles';

export default function SubscriptionForm(props) {
  const { handleSubmit, pristine } = props;
  return (
    <Wrapper component="form" onSubmit={handleSubmit}>
      <Field
        label="email"
        name="email"
        component={TextField}
        validate={composeValidators(validation.required, validation.checkEmail)}
        placeholder="Введите вашу электронную почту"
        sx={{ maxWidth: '260px', color: '#fff' }}
      />
      <Button type="submit" disabled={pristine}>Подписаться</Button>
    </Wrapper>
  );
}
