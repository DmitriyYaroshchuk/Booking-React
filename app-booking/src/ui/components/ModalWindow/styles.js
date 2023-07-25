import { styled } from '@mui/system';
import {
  Dialog, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import Box from '@mui/material/Box';

export const Wrapper = styled(Dialog)({
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#354756',
  boxSizing: 'border-box',
  maxWidth: '650px',
  width: '100%',
});
export const Container = styled(Box)({
  maxWidth: '600px',
  width: '100%',
  margin: '0 auto',
});
export const Title = styled(DialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '110%',
  color: '#fff',
}));
export const Header = styled(Box)({
  boxSizing: 'border-box',
  padding: '15px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const Content = styled(DialogContent)({
  boxSizing: 'border-box',
  margin: '0 auto',
  padding: '30px 0',
});
export const Text = styled(DialogContentText)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '23px',
  lineHeight: '110%',
  color: '#04d004',
  textAlign: 'center',
  marginBottom: '20px',
}));
