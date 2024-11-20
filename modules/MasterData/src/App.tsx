import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css"
import { Provider } from "react-redux";
import { masterDataStore } from "./store/store";
import MasterDataAppRoutes from "./routes/routes"; // for use in host app

interface Props { }

const App = (props: Props) => {
  return <Provider store={masterDataStore}>
    <MasterDataAppRoutes />
  </Provider>
};

export default App;
