import { styled } from '@mui/system';
import { List, ListItem, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export const Wrapper = styled(Stack)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  backgroundColor: '#003b95',
  color: '#fff',
}));
export const BoxTop = styled(Box)({
  padding: '15px 0',
  boxSizing: 'border-box',
  textAlign: 'center',
  borderBottom: '2px solid #fff',
});
export const CustomButton = styled(Button)({
  fontWeight: 400,
  fontSize: '13px',
  lineHeight: '14px',
  padding: '12px 15px',
  backgroundColor: 'transparent',
  borderRadius: '3px',
  border: '1px solid #fff',
});
export const ListWrapper = styled(List)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'row',
});
export const ListItemContainer = styled(ListItem)({
  justifyContent: 'center',
});
export const CustomLink = styled(Link)({
  fontWeight: 700,
  fontSize: '13px',
  lineHeight: '110%',
  padding: '15px 5px',
  color: '#fff',
  textDecoration: 'underline',
  backgroundColor: 'transparent',
  borderRadius: 'unset',
  transition: '0.3s color ease-in-out',
  '&:hover': {
    color: 'coral',
  },
});
