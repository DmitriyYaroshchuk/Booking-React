import {
  Container, List, ListItem,
} from '@mui/material';
import booking from '../../../images/booking.png';
import { Text, Wrapper } from './styles';

export default function Sponsors() {
  return (
    <Wrapper>
      <Container>
        <Text>Copyright © 1996–2023
          Booking.com™. Все права защищены.
        </Text>
        <Text>Booking.com — часть Booking Holdings Inc., мирового лидера в сфере онлайн-туризма и сопутствующих услуг.</Text>
        <List sx={{ display: 'flex' }}>
          <ListItem>
            <img src={booking} alt="booking" title="booking" width="110px" />
          </ListItem>
          <ListItem>
            <img src={booking} alt="booking" title="booking" width="110px" />
          </ListItem>
          <ListItem>
            <img src={booking} alt="booking" title="booking" width="110px" />
          </ListItem>
          <ListItem>
            <img src={booking} alt="booking" title="booking" width="110px" />
          </ListItem>
          <ListItem>
            <img src={booking} alt="booking" title="booking" width="110px" />
          </ListItem>
          <ListItem>
            <img src={booking} alt="booking" title="booking" width="110px" />
          </ListItem>

        </List>
      </Container>
    </Wrapper>
  );
}
