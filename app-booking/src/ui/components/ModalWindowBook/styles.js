import { styled } from '@mui/system';
import {
  Dialog, DialogContent, DialogTitle,
} from '@mui/material';
import Box from '@mui/material/Box';
import { Field } from 'react-final-form';

export const Wrapper = styled(Dialog)({
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  boxSizing: 'border-box',
  maxWidth: '700px',
  width: '100%',
  borderRadius: '10px',
  backgroundColor: '#white',
  boxShadow: '0px 0px 15px 0px #000000',
  color: '#000',
});
export const Container = styled(DialogContent)({
  maxWidth: '650px',
  width: '100%',
  margin: '0 auto',
});
export const Header = styled(Box)({
  boxSizing: 'border-box',
  padding: '20px 0',
  marginBottom: '10px',
  textAlign: 'right',
});
export const Title = styled(DialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '30px',
  lineHeight: '120%',
  textAlign: 'center',
}));
export const TextArea = styled(Field)({
  width: '100%',
  height: '350px',
  backgroundColor: 'rgba(0,133,133,0.3)',
  boxSizing: 'border-box',
  padding: '20px 0 20px 10px',
  marginBottom: '20px',
});
