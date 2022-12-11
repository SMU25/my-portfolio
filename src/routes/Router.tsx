import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound, Home, Blog, Portfolio, Contact } from "src/pages";
import { PATHNAMES } from "src/constants/routes";

const ROUTES = [
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <Portfolio />,
    path: PATHNAMES.PORTFOLIO,
  },
  {
    element: <Blog />,
    path: PATHNAMES.BLOG,
  },
  {
    element: <Contact />,
    path: PATHNAMES.CONTACT,
  },
];

const AppRoutes: FC = () => (
  <Routes>
    {ROUTES.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </Routes>
);

export default AppRoutes;
