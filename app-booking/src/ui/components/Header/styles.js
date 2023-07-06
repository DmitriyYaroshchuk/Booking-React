import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

export const Wrapper = styled(Box)({
  display: 'flex',
  paddingTop: '20px',
  paddingBottom: '20px',
  justifyContent: 'space-between',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14) 0px 1px 10px 0px rgba(0,0,0,0.12)',
  alignItems: 'center',
  boxSizing: 'border-box',
});
export const StackWrapper = styled(Stack)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '180px',
  width: '100%',
  flexDirection: 'row',
});
