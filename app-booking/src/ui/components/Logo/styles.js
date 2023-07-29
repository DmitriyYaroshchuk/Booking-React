import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

export const Wrapper = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  backgroundColor: 'inherit',
  color: theme.palette.primary.main,
}));

export const Icon = styled(Box)({
  width: '50px',
  height: '50px',
  marginRight: '10px',
  backgroundColor: 'transparent',
});
export const Text = styled(Box)({
  margin: 0,
});
