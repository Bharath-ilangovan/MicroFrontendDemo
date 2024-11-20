import React, { useState } from 'react'
import { MasterDataSideNavData } from '../constants/SideBarData'
import Drawer from '@mui/material/Drawer'
import { Box, Button, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import { IMenuChildren, IMenuSideBarGroup } from 'src/types/SideBar'
import ToggleIcon from "../assets/toggleIcon.svg"
import { StyledDrawer } from '../components/styledcomponents'
import { Outlet, useNavigate } from 'react-router-dom'

interface Props {

}

const Dashboard = (props: Props) => {
    const [sideBarState, setSideBarState] = useState<boolean>(false)
    const handleToggleSideBar = () => {
        setSideBarState(!sideBarState)
    }

    const handleSideBarClose = () => {
        setSideBarState(false);
    }

    const navigate = useNavigate();

    const handleOnclickMenu = (path: string) => {
        navigate(path);
        setSideBarState(false);
    }

    const DrawerList = (
        <Box sx={{ width: '100%' }} role="presentation" onClick={handleToggleSideBar}>
            {/* <List sx={{
                pl: '2vw'
            }}> */}
            {MasterDataSideNavData.map((item: IMenuSideBarGroup, index) => (
                <List>
                    <ListItem key={item.groupId} disablePadding>
                        {/* <ListItemIcon>
                                {index % 2 === 0 ? 'V' : 'A'}
                            </ListItemIcon> */}
                        <ListItemText primary={item.groupTitle} sx={{ fontWeight: '800', pl: '1.2vw' }} />
                    </ListItem>
                    {item.children.filter((item: IMenuChildren) => item.isEnable).map((item: IMenuChildren) =>
                        <ListItem key={item.pageId} disablePadding sx={{ fontWeight: '500', }}>
                            <ListItemButton onClick={() => handleOnclickMenu(item.path)}>
                                <ListItemIcon>
                                    {/* {index % 2 === 0 ? 'V' : 'A'} */}
                                </ListItemIcon>
                                <ListItemText primary={item.pageName} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            ))}
            {/* </List> */}
            <Divider />
        </Box>
    );

    return (
        <Stack sx={{ mt: '5vh', display: 'flex', flexDirection: 'row' }}>
            <Stack>
                <StyledDrawer
                    variant="permanent"
                    anchor="left"
                    open={sideBarState}
                    onClose={handleSideBarClose}

                >
                    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <IconButton onClick={handleToggleSideBar} disableRipple disableFocusRipple sx={{
                            alignItems: 'center',
                            alignContent: "center",
                            justifyContent: 'center'
                        }}>
                            <img src={ToggleIcon} alt={'toggle button'} />
                        </IconButton>
                    </Stack>
                    {sideBarState ? DrawerList : <></>}
                </StyledDrawer>
            </Stack>
            <Stack flexGrow={1} sx={{ height: '94vh' }}>
                <Outlet />
            </Stack>
        </Stack>
    )
}

export default Dashboard
