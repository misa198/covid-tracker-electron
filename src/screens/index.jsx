import { Route, Routes } from 'react-router-dom';
import HomeScreen from './Home';
import Vaccine from './Vaccine';
import Worldwide from './Worldwide';

const Screens = () => {
  const routes = [
    {
      exact: true,
      path: '/',
      element: <HomeScreen />,
    },
    {
      exact: true,
      path: '/vaccine',
      element: <Vaccine />,
    },
    {
      exact: true,
      path: '/worldwide',
      element: <Worldwide />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  );
};

export default Screens;
