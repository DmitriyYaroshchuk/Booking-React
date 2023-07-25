import Box from '@mui/material/Box';
import Newsletter from '../Newsletter/Newsletter';
import FooterMenu from '../FooterMenu/FooterMenu';
import FooterNav from '../FooterNav/FooterNav';
import Sponsors from '../Sponsors/Sponsors';
import ModalWindow from '../ModalWindow/ModalWindow';

export default function Footer() {
  return (
    <footer>
      <Box>
        <Newsletter />
        <ModalWindow />
        <FooterMenu />
        <FooterNav />
        <Sponsors />
      </Box>

    </footer>
  );
}
