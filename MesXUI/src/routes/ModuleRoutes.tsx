import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import MasterData from "../pages/MasterData/MasterData";
import FactorySetup from "../pages/MasterData/FactorySetup/FactorySetup";
import AuthProvider from "./AuthProvider";
import ErrorBoundary from "../services/ErrorBoundary";
import QMS from "../pages/QMS/QMS";
import { IChildItem, IParentItem, parentItem } from "src/services/SideBarMenu/SideBarMenu";
import Layout from "src/layouts/Layout";

const SecurityApp = lazy(() =>
  import("SecurityApp/app")
    .then((x) => x)
    .catch((err: any) => {
      console.log("Error loading SecurityApp:", err);
      throw new Error("Failed to load SecurityApp. Please try again later.");
    })
);

// const SkillsApp = lazy(() => import("MasterData/skills"));
const SkillsApp = lazy(() =>
  import("MasterData/skills")
    .then((x) => x)
    .catch((err: any) => {
      console.log("Error loading SkillsApp:", err);
      throw new Error("Failed to load SkillsApp. Please try again later.");
    })
);

// QMS
const QMSApp = lazy(() => import("QMS/MRCRelease").then((x) => x)
  .catch((err: any) => {
    console.log("Error loading SecurityApp:", err);
    throw new Error("Failed to load QMS/MRCRelease. Please try again later.");
  }))

const QMSDataRoute = () => (
  <Route path="QMS" element={<QMS />}>
    <Route
      path=""
      element={
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading...</h1>}>
            <QMSApp />
          </Suspense>
        </ErrorBoundary>
      }
    />
  </Route>
);

const MasterDataRoute = () => (
  <Route path="masterdata" element={<MasterData />}>
    <Route
      path="factorysetup"
      element={<FactorySetup />}
      handle={{ crumb: () => "Factory Setup" }}
    >
      <Route
        path="skills"
        element={
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
              <SkillsApp />
            </Suspense>
          </ErrorBoundary>
        }
        handle={{ crumb: () => "Skills" }}
      />
    </Route>
  </Route>
);

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			{/* Public Routes */}
			{/* <Route path="login" element={<Login />} /> */}
			{/* Protected Routes */}
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/" element={<Layout />}>
					{parentItem.map((parent: IParentItem) => (
						<Route path={parent.path}>
							{parent.children.map((child: IChildItem) => (
								<Route
									path={child.path}
									element={child.page}
									handle={{ crumb: () => child.label }}
								/>
							))}
						</Route>
					))}
					{/* <Route path="/master" handle={{ crumb: () => "Master" }}>
						<Route
							index
							element={
								<>
									<h1>master page 1</h1>
								</>
							}
							handle={{ crumb: () => "Master Page 1" }}
						/>
						<Route
							path="masterPage2"
							element={
								<>
									<h1>master page 2</h1>
								</>
							}
							handle={{ crumb: () => "Master Page 1" }}
						/>
					</Route> */}
				</Route>
			</Route>
		</Route>,
	),
	{
		future: {
			v7_normalizeFormMethod: true, // Normalize formMethod fields to uppercase.
			v7_partialHydration: true, // Enable partial hydration.
			v7_skipActionErrorRevalidation: true, // Skip revalidation after 4xx/5xx action responses.
			// v7_startTransition: false,              // Wrap state updates in React.startTransition.
			v7_relativeSplatPath: true, // Change relative route resolution in Splat routes.
			v7_fetcherPersist: true,
		},
	},
);

{
	/* <Route
						path="/"
						//   element={<ProductionMonitoring />}
						handle={{ crumb: () => "Home" }}>
						<Route
							path="/"
							index
							// element={<XpertPilot />}
							handle={{ crumb: () => "Cantier's Xpert Pilot" }}
						/>
					</Route> */
}

