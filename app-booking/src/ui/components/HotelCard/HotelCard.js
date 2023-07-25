import {
  CardActions, CardContent, CardMedia,
} from '@mui/material';
import {
  CustomButton,
  CustomCard,
  HotelRating, Name, PhoneNumber, Text,
} from './styles';
import hotelImg from '../../../images/hotelImg.jpg';

export default function HotelCard(props) {
  const {
    name, address, city, countryCode, hotelRating, phoneNumber,
  } = props;
  return (
    <CustomCard sx={{ width: '100%', paddingBottom: '15px' }}>
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
      <CardActions>
        <CustomButton>Забронировать этот отель</CustomButton>
      </CardActions>
    </CustomCard>
  );
}
