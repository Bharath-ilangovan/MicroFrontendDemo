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
import closeIcon from "../assets/closeBtn.svg"

interface Props {
  handleClose: MouseEventHandler<any> | undefined;
  open: boolean;
  onClose: () => void;
  handleSelectModule: (path: string) => void
  activeModule: string
}

interface SideMenu {
  text: string;
  icon: string;
  iconLight: string;
  node: number;
  path: string;
}

const ModuleButtons: FC<Props> = ({ handleClose, open, onClose, handleSelectModule, activeModule }) => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          zIndex: 999999,
          mt: "5vh",
          width: "15vw",
          boxSizing: "border-box",
          backgroundColor: '#EAEAEA'
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      transitionDuration={500}
    ><Stack height={'3.2vh'} sx={{ alignItems: "flex-end", justifyContent: "center" }}><IconButton onClick={onClose} ><img alt="close-btn" style={{ height: '1.5vh', width: '1.5vh' }} src={closeIcon} /></IconButton></Stack>
      <Grid container spacing={1} pt={'3.2vh'} sx={{ alignItem: 'center', justifyContent: 'center', }}>
        {MesSideMenuData.map((item: SideMenu, index: number) => (
          <Grid item key={item.node}>
            <IconButton
              onClick={() => handleSelectModule(item.path)}
              key={index + "-icon-btn-" + item.path}
              onMouseEnter={() => setHoveredModule(item.path)}
              onMouseLeave={() => setHoveredModule(null)}
              sx={{
                width: '13.5vh', height: '13.5vh',
                display: "flex",
                flexDirection: "column",
                borderColor: '#DDDDDD',
                borderRadius: '0.5vh',
                backgroundColor: item.path === activeModule ? "#002856" : "#FFF",
                color: item.path === activeModule ? "#FFF" : "#454545",
                p: 0,
                py: 2,
                px: 2,
                "&:hover": {
                  backgroundColor: item.path === activeModule ? "#FFF" : "#002856",
                  color: item.path !== activeModule ? "#FFF" : "#454545"
                },

              }}
              disableRipple
            >{
                item.path === activeModule ? <img src={hoveredModule === item.path ? item.icon : item.iconLight} alt={item.text} style={{ height: '4vh', width: '4vh' }} /> :
                  <img src={hoveredModule === item.path
                    ? item.iconLight
                    : item.icon} alt={item.text} style={{ height: '4vh', width: '4vh' }} />
              }
              <Typography sx={{
                // fontSize: "0.8rem",
                fontSize: "1.5vh",
                pt: '0.5vh'
              }}>{item.text}</Typography>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Drawer >
  );
};

export default ModuleButtons;
