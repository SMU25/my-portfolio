import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "src/routes/Router";

function App(): ReactElement {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
//

export default App;
