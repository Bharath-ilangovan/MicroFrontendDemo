
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";

const SecurityApp = lazy(() => import("SecurityApp/app"));
const MasterDataApplication = lazy(() => import("MasterData/app"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route path="/" element={<Login />} />
      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute />} >
        <Route path="/dashboard" element={<Home />}>
          <Route
            path="security"
            element={
              <Suspense fallback={<>loading...</>}>
                <SecurityApp />
              </Suspense>
            }

          />
          <Route
            path="masterdata"
            element={
              <Suspense fallback={<>loading...</>}>
                <MasterDataApplication />
              </Suspense>
            }
          />
          <Route path="*" element={<h1>Page Not Found SUb</h1>} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Route>
  )
);
