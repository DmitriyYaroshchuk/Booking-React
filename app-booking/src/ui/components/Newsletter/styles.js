import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const Wrapper = styled(Box)({
  padding: '50px 0',
  boxSizing: 'border-box',
  backgroundColor: '#00224f',
});
export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '110%',
  marginBottom: '10px',
  color: '#fff',
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '110%',
  marginBottom: '20px',
  color: '#bdbdbd',
}));
