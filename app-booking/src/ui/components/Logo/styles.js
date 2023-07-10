import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

export const Wrapper = styled(Link)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '210%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  backgroundColor: 'inherit',
  color: theme.palette.primary.main,
}));

export const Icon = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '50px',
  marginRight: '10px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
}));
export const Text = styled(Box)({
  margin: 0,
});
