import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import AppRoutes from "./routes/Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App(): ReactElement {
  return (
    <div className="App text-black-dark">
      <BrowserRouter>
        <ReduxProvider store={store}>
          <Header />
          <AppRoutes />
          <Footer />
        </ReduxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
