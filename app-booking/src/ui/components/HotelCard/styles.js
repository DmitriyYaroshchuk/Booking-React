import { styled } from '@mui/system';
import { Card, Typography } from '@mui/material';
import logoPhone from '../../../images/phone.svg';
import Button from '../Button/Button';

export const CustomCard = styled(Card)({
  transition: '0.3s all ease-in-out',
  '&:hover': {
    backgroundColor: '#eee',
    boxShadow: '2px 2px 15px 1px #000000',
  },
});
export const Name = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '110%',
  marginBottom: '30px',
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '110%',
  marginBottom: '10px',
}));
export const PhoneNumber = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '110%',
  marginBottom: '15px',
  color: theme.palette.primary.main,
  display: 'flex',
  '&::before': {
    content: "''",
    backgroundImage: `url(${logoPhone})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginRight: '10px',
    width: '20px',
    height: '20px',
  },
}));
export const HotelRating = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5.6px 5.6px 5.6px 0',
  width: '30px',
  height: '30px',
  marginLeft: 'auto',
  backgroundColor: '#003b95',
  color: '#fff',
});
export const CustomButton = styled(Button)({
  border: '2px solid #4286de',
  backgroundColor: '#fff',
  color: '#4286de',
  margin: '0 auto',
  transition: '0.3s color ease-in-out',
  '&:hover': {
    color: '#fff',
  },
});
