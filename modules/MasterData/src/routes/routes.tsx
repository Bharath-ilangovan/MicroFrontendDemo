import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Skills from "../pages/FactorySetup/Skills/Skills";
import FactorySetup from "../pages/FactorySetup/FactorySetup";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" >
            <Route path="/" element={<Dashboard />} >
                <Route path="factorySetup" element={<FactorySetup />} handle={{ crumb: () => "Factory Setup" }}>
                    <Route path="skills" element={<Skills />} handle={{ crumb: () => "Skills" }}/>
                </Route>
                <Route path="*" element={<h2>404</h2>} />
            </Route>
        </Route>
    ));