import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "./App.css"
import { Provider } from "react-redux";
import { masterDataStore } from "./store/store";

interface Props { }

const App = (props: Props) => {
  return <Provider store={masterDataStore}>
    <RouterProvider router={router} />;
  </Provider>
};

export default App;
