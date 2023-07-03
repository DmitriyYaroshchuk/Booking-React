import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </Container>
  );
}
