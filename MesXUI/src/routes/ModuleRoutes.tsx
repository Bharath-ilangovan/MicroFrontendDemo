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
    <Route path="/" element={<AuthProvider />}>
      <Route path="/" element={<Login />} />
      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Home />}>
          {/* Master Data Routes */}
          {MasterDataRoute()}
          {/* Security Routes */}
          {/* QMS */}
          {QMSDataRoute()}
          <Route
            path="security"
            element={
              <ErrorBoundary>
                <Suspense fallback={<>loading...</>}>
                  <SecurityApp />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="*"
            element={
              <div
                style={{
                  height: "90vh",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2>Micro Frontend Not Found</h2>
              </div>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Route>
  )
);
