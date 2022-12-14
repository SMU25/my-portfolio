import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "src/routes/Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App(): ReactElement {
  return (
    <div className="App text-black-dark">
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
