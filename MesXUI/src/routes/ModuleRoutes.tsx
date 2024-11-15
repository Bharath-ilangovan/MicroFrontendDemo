
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import { Suspense, lazy } from "react";

const SecurityApp = lazy(() => import("SecurityApp/app"));
const MasterDataApplication = lazy(() => import("MasterData/app"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />}>
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
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Route>
  )
);
