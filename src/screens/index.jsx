import { Route, Routes } from 'react-router-dom';
import AboutScreen from './About';
import HomeScreen from './Home';
import NewsScreen from './News';
import VaccineScreen from './Vaccine';
import WorldwideScreen from './Worldwide';

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
      element: <VaccineScreen />,
    },
    {
      exact: true,
      path: '/worldwide',
      element: <WorldwideScreen />,
    },
    {
      exact: true,
      path: '/news',
      element: <NewsScreen />,
    },
    {
      exact: true,
      path: '/about',
      element: <AboutScreen />,
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
