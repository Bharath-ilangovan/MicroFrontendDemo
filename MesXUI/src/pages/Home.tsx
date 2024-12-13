import React, { useLayoutEffect, useState } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import ModuleButtons from "./ModuleButtons";
import { SideBar, TitleBar } from 'CDS';
import { ModuleRoutes, selectModuleBasedSideBar } from "../constants/SideBarData";

interface Props { }

const Home = (props: Props) => {
  const [moduleState, setModuleState] = useState<boolean>(false);
  const [activeModule, setActiveModule] = useState<ModuleRoutes>(ModuleRoutes.MasterData);
  const [sideBarState, setSideBarState] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSideBarToggle = () => {
    setSideBarState((prev: any) => !prev);
  }

  const handleSideBarClose = () => {
    setSideBarState(false);
  }

  const handleSelectModule = (path: ModuleRoutes) => {
    setActiveModule(path);
    setModuleState(false);
  }
  const handleModuleClick = () => {
    setModuleState((prev: any) => !prev);
  };
  const handleModuleBarClose = () => {
    setModuleState(false);
  };

  useLayoutEffect(() => {
    navigate(activeModule);
    return () => {

    };
  }, [])
 
  return (
    <React.Fragment>
      <TitleBar
        version={"MES x.0"}
        notification
        info
        settings
        moduleOnclick={handleModuleClick}
      />
      <ModuleButtons
        handleClose={moduleState ? handleModuleBarClose : handleModuleBarClose}
        open={moduleState}
        onClose={handleModuleBarClose}
        activeModule={activeModule}
        handleSelectModule={handleSelectModule}
      />
      <div style={{ marginTop: "5vh", width: "100vw", display: 'flex', flexDirection: "row" }}>
        <SideBar onClick={handleSideBarToggle} onClose={handleSideBarClose} open={sideBarState} menus={selectModuleBasedSideBar(activeModule)} />
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Home;
