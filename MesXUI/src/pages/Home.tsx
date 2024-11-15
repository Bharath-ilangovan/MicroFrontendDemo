import { Button, Container, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import ModuleButtons from "./ModuleButtons";
import MesTitleBar from "../components/MesTitleBar";

interface Props {}

const Home = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleModuleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MesTitleBar
        version={"MES x.0"}
        notification
        info
        settings
        // profileUserName={data?.username}
        // profileRole={data?.role}
        // profileLogoutOnClick={handleLogout}
        moduleOnclick={handleModuleClick}
      />
      <ModuleButtons
        handleClose={open ? handleClose : handleClose}
        open={open}
        onClose={handleClose}
      />
      <div style={{ marginTop: "5vh", width: "100vw" }}>
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Home;
