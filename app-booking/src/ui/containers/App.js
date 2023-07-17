import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
import { pages } from '../../engine/config/routers';
import Layout from './Layout/Layout';
import { history } from '../../engine/init/store';
import '../../fonts/fonts.css';

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pages.map((route) => (
            <Route
              key={route.link}
              element={route.element}
              path={route.link}
            />
          ))}
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
