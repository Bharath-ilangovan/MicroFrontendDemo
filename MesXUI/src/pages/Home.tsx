
import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import ModuleButtons from "./ModuleButtons";
import MesTitleBar from "../components/MesTitleBar";
import CDSSideBar from "../components/CDSSideBar/CDSSideBar";
import { TitleBar } from "CDS"

interface Props { }

const Home = (props: Props) => {
  const [moduleState, setModuleState] = useState<boolean>(false);
  const [activeModule, setActiveModule] = useState<string>("/dashboard/masterdata");
  const [sideBarState, setSideBarState] = useState<boolean>(false);

  const handleSideBarToggle = () => {
    setSideBarState((prev) => !prev);
  }

  const handleSideBarClose = () => {
    setSideBarState(false);
  }

  const handleSelectModule = (path: string) => {
    setActiveModule(path);
    setModuleState(false);
  }
  const handleModuleClick = () => {
    setModuleState((prev) => !prev);
  };
  const handleModuleBarClose = () => {
    setModuleState(false);
  };

  return (
    <React.Fragment>
      <TitleBar
        version={"MES x.0"}
        notification
        info
        settings
        // profileUserName={data?.username}
        // profileRole={data?.role}
        // profileLogoutOnClick={handleLogout}
        moduleOnclick={handleModuleClick} home={false} />
      <ModuleButtons
        handleClose={moduleState ? handleModuleBarClose : handleModuleBarClose}
        open={moduleState}
        onClose={handleModuleBarClose}
        activeModule={activeModule}
        handleSelectModule={handleSelectModule}
      />
      <div style={{ marginTop: "5vh", width: "100vw", display: 'flex', flexDirection: "row" }}>
        <CDSSideBar onClick={handleSideBarToggle} onClose={handleSideBarClose} open={sideBarState} menus={<></>} />
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Home;
