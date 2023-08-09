import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { Field } from 'react-final-form';
import Button from '../Button/Button';
import bgForm from '../../../images/bgForm.jpeg';

export const MainWrapper = styled(Box)({
  backgroundColor: '#adadad',
  backgroundImage: `url(${bgForm})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  margin: '0 auto',
  boxSizing: 'border-box',
  padding: '100px 0',
});
export const TopContent = styled(Box)({
  padding: '48px 0 78px 0',
  boxSizing: 'border-box',
});
export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '35px',
  lineHeight: '110%',
  color: '#fff',
  marginBottom: '25px',
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '110%',
  color: '#fff',
}));
export const Wrapper = styled(Box)({
  display: 'flex',
  backgroundColor: 'unset',
  margin: 0,
});
export const FormButton = styled(Button)({
  maxWidth: '200px',
  width: '100%',
  backgroundColor: '#00bcd4',
  height: '50px',
  transition: '0.3s backgroundColor ease-in-out',
  '&:hover': {
    backgroundColor: '#01899BFF',
  },
  '& .MuiLoadingButton-loading': {
    backgroundColor: '#0000bb',
  },
});
export const CustomGridContainer = styled(Grid)({
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const FormField = styled(Field)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.5)',
  borderRadius: '4px',
  '& .MuiFormHelperText-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '110%',
    backgroundColor: 'transparent',
    margin: 0,
  },
  '& .MuiInputBase-input': {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '110%',
    color: '#fff',
  },
}));
