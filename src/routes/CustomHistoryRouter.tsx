import React, { FC, ReactNode, useState, useLayoutEffect } from "react";
import { Router } from "react-router-dom";
import { BrowserHistory, Action, Location } from "history";

interface CustomHistoryRouterProps {
  basename?: string;
  children?: ReactNode;
  history: BrowserHistory;
}

interface CustomHistoryRouterState {
  action: Action;
  location: Location;
}

const CustomHistoryRouter: FC<CustomHistoryRouterProps> = ({
  history,
  ...props
}) => {
  const [state, setState] = useState<CustomHistoryRouterState>({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomHistoryRouter;
