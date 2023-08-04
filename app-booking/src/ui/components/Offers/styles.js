import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  boxSizing: 'border-box',
  color: '#000',
  backgroundColor: '#fff',
}));
export const Content = styled(Grid)({
  padding: '50px 0',
  boxSizing: 'border-box',
  maxWidth: '800px',
  width: '100%',
  margin: '0 auto',

});
export const CustomBox = styled(Box)({
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: 0,
  },
});
export const Title = styled(Typography)({
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '110%',
});
export const Subtitle = styled(Typography)({
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '120%',
  marginBottom: '20px',
});
export const Text = styled(Typography)({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '120%',
});
export const CustomLink = styled(Link)({
  color: '#006ce4',
  textDecoration: 'underline',
});
