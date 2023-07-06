import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Header from '../components/Header/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});
export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
        <Outlet />
        <footer>Footer</footer>
      </Container>
    </ThemeProvider>

  );
}
