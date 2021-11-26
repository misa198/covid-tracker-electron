import { Route, Routes } from 'react-router-dom';
import HomeScreen from './Home';

const Screens = () => {
  const routes = [
    {
      exact: true,
      path: '/',
      element: <HomeScreen />,
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
