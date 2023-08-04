import Main from '../../ui/pages/Main';
import About from '../../ui/pages/About';
import Hotels from '../../ui/pages/Hotels/Hotels';
import { links } from './links';

export const pages = [
  {
    link: links.main,
    element: <Main />,
  },
  {
    link: links.about,
    element: <About />,
  },
  {
    link: links.hotels,
    element: <Hotels />,
  },
];
