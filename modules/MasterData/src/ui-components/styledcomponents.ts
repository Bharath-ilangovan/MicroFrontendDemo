import { Drawer, Paper, styled } from "@mui/material";

const drawerWidth = 280;
const shrunkDrawerWidth = 64;

export const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? drawerWidth : shrunkDrawerWidth,
  flexShrink: 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 600,
  }),
  backgroundColor: "#F4F4F4",
  "& .MuiDrawer-paper": {
    width: open ? drawerWidth : shrunkDrawerWidth,
    // overflow: "hidden",
    backgroundColor: "#F4F4F4",
    top: "5vh",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      // duration: theme.transitions.duration.leavingScreen,
      duration: 600,
      delay: 300,
    }),
  },
}));

export const GridItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
