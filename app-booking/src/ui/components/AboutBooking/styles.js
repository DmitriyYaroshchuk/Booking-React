import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Box)({
  backgroundColor: '#fff',
  padding: '50px 0',
  boxSizing: 'border-box',
});
export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '110%',
  backgroundColor: '#f5f5f5',
  padding: '12px 16px',
  boxSizing: 'border-box',
  maxWidth: '240px',
  width: '100%',
}));
export const ListWrapper = styled(List)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
}));
export const CustomListItem = styled(ListItem)({
  fontSize: '14px',
  lineHeight: '160%',
  margin: '0',
  padding: '0',
});
export const CustomLink = styled(Link)({
  display: 'block',
  boxSizing: 'border-box',
  padding: '10px 14px',
  textDecoration: 'none',
  transition: '0.4s background-color ease-in-out',
  color: '#006ce4',
  '&:hover': {
    backgroundColor: '#ebf3ff',
  },
});
export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '38px',
  lineHeight: '110%',
  marginBottom: '42px',
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '130%',
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: '0',
  },
}));
