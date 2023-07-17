import {
  Card,
  CardActionArea, CardActions, CardContent, CardMedia,
} from '@mui/material';
import {
  HotelRating, Name, PhoneNumber, Text,
} from './styles';
import hotelImg from '../../../images/hotelImg.jpg';
import Button from '../Button/Button';

export default function HotelCard(props) {
  const {
    name, address, city, countryCode, hotelRating, phoneNumber,
  } = props;
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hotelImg}
          alt="hotel"
        />
        <CardContent>
          <Name gutterBottom variant="h5" component="div">{name}</Name>
          <Text variant="body2" color="text.secondary">{address}, {city}, {countryCode}</Text>
          <PhoneNumber component="a" href={phoneNumber || undefined}>{phoneNumber || 'Номера нет'}</PhoneNumber>
          <HotelRating>{hotelRating || '-'}</HotelRating>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>Забронировать этот отель</Button>
      </CardActions>
    </Card>
  );
}
