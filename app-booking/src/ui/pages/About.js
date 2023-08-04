import Box from '@mui/material/Box';
import AboutBooking from '../components/AboutBooking/AboutBooking';
import Offices from '../components/Offices/Offices';
import Offers from '../components/Offers/Offers';

export default function About() {
  return (
    <Box component="div">
      <AboutBooking />
      <Offices />
      <Offers />
    </Box>
  );
}
