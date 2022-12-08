import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "src/routes/Router";
import { Header } from "./components/Header";

function App(): ReactElement {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
