import {
  CardMedia,
  DialogActions,
} from '@mui/material';
import { useDispatch } from 'react-redux';
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
  const open = selectors.popup;
  const handlerShowPopup = () => {
    dispatch(setPopup(!open));
  };
  const handlerClosePopup = () => {
    dispatch(setPopup(!open));
  };

  return (
    <>
      <Newsletter handlerShowPopup={handlerShowPopup} />
      <Wrapper open={open}>
        <Container>
          <Header>
            <Title>Booking</Title>
            <DialogActions>
              <Button sx={{ backgroundColor: 'transparent' }} onClick={handlerClosePopup}>
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
            />
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}
