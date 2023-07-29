import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export const Wrapper = styled(Box)({
  backgroundColor: 'azure',
  boxSizing: 'border-box',
  padding: '50px 0',
});
export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '30px',
  lineHeight: '110%',
  marginBottom: '30px',
  color: '#00bcd4',
}));
export const GridWrapper = styled(Grid)({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '30px',
});
export const GridContainer = styled(Grid)({
  maxWidth: '345px',
  width: '100%',
});
