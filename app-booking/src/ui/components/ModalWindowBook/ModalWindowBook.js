import {
  CardMedia,
} from '@mui/material';
import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Header, Title, Wrapper,
} from './styles';
import close from '../../../images/close.svg';
import Button from '../Button/Button';
import ModalWindowBookForm from './ModalWindowBookForm/ModalWindowBookForm';
import { hotelsSelectors, setPopup } from '../../../engine/core/hotels/sliceHotels';

export default function ModalWindowBook() {
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem('bookingData', JSON.stringify(data));
  };
  const open = useSelector(hotelsSelectors.popup);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setPopup(false));
  };
  return (
    <Wrapper open={open}>
      <Container>
        <Header>
          <Button sx={{ width: '65px' }} onClick={handleClose}>
            <CardMedia
              component="img"
              alt="close"
              image={close}
              title="close"
            />
          </Button>
          <Title>Booking hotel</Title>
        </Header>
        <Form
          onSubmit={saveDataToLocalStorage}
          render={ModalWindowBookForm}
        />
      </Container>
    </Wrapper>
  );
}
