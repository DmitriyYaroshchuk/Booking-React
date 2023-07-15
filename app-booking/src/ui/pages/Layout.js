import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { Provider } from 'react-redux';
import Header from '../components/Header/Header';
import { store } from '../../engine/init/store';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Header />
        <Container>
          <Outlet />
          <footer>Footer</footer>
        </Container>
      </Provider>
    </ThemeProvider>

  );
}
