import { Container } from '@mui/material';
import { Form } from 'react-final-form';
import SubscriptionForm from './SubscriptionForm/SubscriptionForm';
import { Text, Title, Wrapper } from './styles';

export default function Newsletter(props) {
  const { handlerShowPopup } = props;
  return (
    <Wrapper>
      <Container sx={{ textAlign: 'center' }}>
        <Title component="h5" variant="h5">Сэкономьте время и деньги!</Title>
        <Text component="p" variant="p">Подпишитесь и мы будем присылать вам самые лучшие предложения</Text>
        <Form
          onSubmit={handlerShowPopup}
          render={SubscriptionForm}
        />
      </Container>
    </Wrapper>
  );
}
