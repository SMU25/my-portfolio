import React, { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { history } from "./services/history";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";
import AppRoutes from "./routes/Router";
import { store } from "./redux/store";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
      <ReduxProvider store={store}>
        <div className="App text-black-dark">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </ReduxProvider>
    </CustomHistoryRouter>
  );
}

export default App;
