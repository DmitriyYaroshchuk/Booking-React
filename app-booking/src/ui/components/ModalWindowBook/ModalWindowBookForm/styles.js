import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Field } from 'react-final-form';
import { Typography } from '@mui/material';

export const Wrapper = styled(Box)({
  backgroundColor: '#fff',
  maxWidth: '600px',
  width: '100%',
});
export const CustomField = styled(Field)(({ theme }) => ({
  backgroundColor: 'rgba(74,114,140,0.3)',
  borderRadius: '4px',
  width: '100%',
  marginBottom: '25px',
  '& .MuiFormHelperText-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '110%',
    backgroundColor: '#fff',
    margin: 0,
  },
  '& .MuiInputBase-input': {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '110%',
    color: 'white',
  },
}));
export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '23px',
  lineHeight: '130%',
  marginBottom: '15px',
}));
