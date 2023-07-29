import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '30px',
  lineHeight: '110%',
  marginBottom: '30px',
  color: '#000',
}));
