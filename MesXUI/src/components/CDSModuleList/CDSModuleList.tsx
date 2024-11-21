import React from "react";
import { Drawer, Grid, Button, Typography } from "@mui/material";

interface MenuItem {
  node: number;
  path: string;
  icon: string | undefined;
  text: string;
}

interface CustomDrawerProps {
  menuItems: MenuItem[];
  horizontalNavState: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  selectedMenu: string;
}

const MesModuleList: React.FC<CustomDrawerProps> = ({
  menuItems,
  horizontalNavState,
  onClose,
  onNavigate,
  selectedMenu,
}) => {
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={horizontalNavState}
        className="drawPaper_40" // Apply class name here
        transitionDuration={500}
        onClose={onClose}
        variant="persistent"
      >
        <Grid container width={"15vw"}>
          {menuItems.map((item) => (
            <Grid item xs={4} md={4} sm={4} key={item.node}>
              <Button
                onClick={() => onNavigate(item.path)}
                // className={selectedMenu === item.node ? "selected" : ""}
              >
                <Grid container>
                  <Grid item xs={12} md={12} sm={12}>
                    <img src={item.icon} alt={item.text} />
                    <Typography>{item.text}</Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Drawer>
    </React.Fragment>
  );
};

export default MesModuleList;
