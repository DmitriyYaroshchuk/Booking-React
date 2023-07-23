import { styled } from '@mui/system';
import { Grid, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export const WrapperList = styled(List)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: 400,
  maxWidth: '220px',
  width: '100%',
}));
export const ListItemCustom = styled(ListItem)({
  transition: '0.3s color ease-in-out',
  fontSize: '13px',
  lineHeight: '14px',
});
export const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: '#006ce4',
  '&:hover': {
    color: 'orange',
  },
});
export const WrapperGrid = styled(Grid)({
  justifyContent: 'space-between',
});
