import Box from '@mui/material/Box';
import Newsletter from '../Newsletter/Newsletter';
import FooterMenu from '../FooterMenu/FooterMenu';
import FooterNav from '../FooterNav/FooterNav';
import Sponsors from '../Sponsors/Sponsors';

export default function Footer() {
  return (
    <footer>
      <Box>
        <Newsletter />
        <FooterMenu />
        <FooterNav />
        <Sponsors />
      </Box>

    </footer>
  );
}
