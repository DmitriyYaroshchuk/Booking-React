import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  color: '#6b6b6b',
  textAlign: 'center',
}));
export const Text = styled(Typography)({
  fontSize: '13px',
  lineHeight: '14px',
  marginBottom: '15px',
});
