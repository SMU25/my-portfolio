import React, { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { history } from "./services/history";
import CustomHistoryRouter from "./routes/CustomHistoryRouter";
import AppRoutes from "./routes/Router";
import { store } from "./redux/store";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

//CHANGE - додати перевірку ,якщо є значення в редаксі, то запит не кидати знову

function App(): ReactElement {
  return (
    <CustomHistoryRouter history={history}>
      <ReduxProvider store={store}>
        <div className="App flex flex-col h-screen text-black-dark overflow-y-auto overflow-x-hidden">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </ReduxProvider>
    </CustomHistoryRouter>
  );
}

export default App;
