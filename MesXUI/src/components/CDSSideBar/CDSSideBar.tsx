import { Drawer, styled } from '@mui/material'
import React from 'react'

const drawerWidth = '28vh';
const shrunkDrawerWidth = '5vh';
export const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
    width: open ? drawerWidth : shrunkDrawerWidth,
    flexShrink: 0,
    zIndex: 3,
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

interface Props {
    open: boolean,
    onClose: () => void
    onClick: () => void
}

const CDSSideBar = (props: Props) => {
    return (
        <StyledDrawer variant="permanent"
            anchor="left"
            open={props.open}
            onClose={props.onClose}></StyledDrawer>
    )
}

export default CDSSideBar
