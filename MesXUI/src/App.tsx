import { RouterProvider } from "react-router-dom";
import { router } from "./routes/ModuleRoutes";
import "./index.css";

interface Props {}

const App = (props: Props) => {
  return <RouterProvider router={router} />;
};

export default App;
