import Main from '../../ui/pages/Main';
import About from '../../ui/pages/About';

export const links = {
  main: '/',
  about: '/about',
};
export const pages = [
  {
    link: links.main,
    element: <Main />,
  },
  {
    link: links.about,
    element: <About />,
  },
];
