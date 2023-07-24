import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '../Button/Button';

export const Wrapper = styled(Box)({
  display: 'flex',
  backgroundColor: '#f7f7f7',
  margin: 0,
});
export const FormButton = styled(Button)({
  maxWidth: '200px',
  width: '100%',
  backgroundColor: 'orange',
  height: '50px',
  transition: '0.3s backgroundColor ease-in-out',
  '&:hover': {
    backgroundColor: '#bb7c09',
  },
});
