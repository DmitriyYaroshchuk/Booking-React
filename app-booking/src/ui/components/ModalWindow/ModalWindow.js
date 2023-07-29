import {
  CardMedia,
  DialogActions,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Newsletter from '../Newsletter/Newsletter';
import Button from '../Button/Button';
import close from '../../../images/close.svg';
import checkMark from '../../../images/checkMark.svg';
import {
  Container, Content, Header, Text, Title, Wrapper,
} from './styles';
import { selectors, setPopup } from '../../../engine/core/destinations/sliceDestinations';

export default function ModalWindow() {
  const dispatch = useDispatch();
  const open = useSelector(selectors.popup);
  const handlerShowPopup = () => {
    dispatch(setPopup(true));
  };
  const handlerClosePopup = () => {
    dispatch(setPopup(false));
  };
  return (
    <>
      <Newsletter handlerShowPopup={handlerShowPopup} />
      <Wrapper open={open}>
        <Container>
          <Header>
            <Title>Booking</Title>
            <DialogActions>
              <Button sx={{ backgroundColor: 'transparent', width: '65px' }} onClick={handlerClosePopup}>
                <CardMedia
                  component="img"
                  alt="close"
                  image={close}
                  title="close"
                />
              </Button>
            </DialogActions>
          </Header>
          <Content>
            <Text>Спасибо, мы отправим письмо на вашу почту !</Text>
            <CardMedia
              component="img"
              alt="checkMark"
              image={checkMark}
              title="checkMark"
              sx={{ width: '100px', margin: '0 auto' }}
            />
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}
