import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import {
  NotFound,
  Home,
  Blog,
  BlogPost,
  Portfolio,
  PortfolioProject,
  Contacts,
} from "src/pages";
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
    element: <PortfolioProject />,
    path: PATHNAMES.PORTFOLIO_WORK,
  },
  {
    element: <Blog />,
    path: PATHNAMES.BLOG,
  },
  {
    element: <BlogPost />,
    path: PATHNAMES.BLOG_POST,
  },
  {
    element: <Contacts />,
    path: PATHNAMES.CONTACTS,
  },
];

const AppRoutes: FC = () => useRoutes(ROUTES);

export default AppRoutes;
