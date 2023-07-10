import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

export const Wrapper = styled(Box)({
  paddingTop: '20px',
  paddingBottom: '20px',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  boxSizing: 'border-box',
  marginBottom: '50px',
  backgroundColor: 'darkblue',
});
export const InnerWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1450px',
  width: '100%',
  margin: '0 auto',
});
export const StackWrapper = styled(Stack)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '180px',
  width: '100%',
  flexDirection: 'row',
});
