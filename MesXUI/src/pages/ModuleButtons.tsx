import {
  Button,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  ModalProps,
  PopoverProps,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC, MouseEventHandler, useState } from "react";
import { MesSideMenuData } from "../constants/moduleData";
import { useNavigate, useNavigation } from "react-router-dom";
import styled from "@emotion/styled";

interface Props {
  handleClose: MouseEventHandler<any> | undefined;
  open: boolean;
  onClose: ()=> void;
}

interface SideMenu {
  text: string;
  icon: string;
  node: number;
  path: string;
}

const ModuleButtons: FC<Props> = ({ handleClose, open, onClose }) => {
  const [selected, setSelected] = useState<undefined | string>(undefined);
  const navigate = useNavigate();
  const handleSelect = (path: string) => {
    setSelected(path);
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      sx={{
        width: "13vh",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          mt: "5vh",
          width: "13vw",
          boxSizing: "border-box",
          backgroundColor: '#fff'
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      transitionDuration={500}
    >
      <Grid container spacing={1}>
        {MesSideMenuData.map((item: SideMenu, index: number) => (
          <Grid item xs={6} key={item.node} sx={{ backgroundColor: '#cecece' }}>
            <IconButton
              onClick={() => handleSelect(item.path)}
              // className={selected === item.path ? "" : ""}
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 0,
                py: 2,
                px: 2,
                borderRadius: 0,
              }}
              disableRipple
            >
              <img src={item.icon} alt={item.text} />
              <Typography sx={{ fontSize: "1vh" }}>{item.text}</Typography>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Drawer>
  );
};

export default ModuleButtons;
