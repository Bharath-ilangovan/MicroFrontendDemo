import { RouterProvider } from "react-router-dom";
import { router } from "./routes/ModuleRoutes";
import "./App.css";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

interface Props {}

const App = (props: Props) => {
	return (
		<FluentProvider
			theme={{
				...webLightTheme,
				colorCompoundBrandStroke: "#F15D22",
				colorCompoundBrandStrokeHover: "#F15D22",
			}}>
			<RouterProvider router={router} />
		</FluentProvider>
	);
};

export default App;
