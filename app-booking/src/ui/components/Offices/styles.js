import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import world from '../../../images/mapOfWorld.png';

export const Wrapper = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  backgroundColor: '#5797ec',
  backgroundImage: `url(${world})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '100px 0 30px 0',
  boxSizing: 'border-box',
  color: '#fff',
}));
export const Text = styled(Typography)({
  fontSize: '16px',
  lineHeight: '180%',
  textAlign: 'center',
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: 0,
  },
});
