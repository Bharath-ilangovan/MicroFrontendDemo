import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton } from "@mui/material";
const MesSettings = ({ sx, icon, settingsComponent, settingsOnCLick, }) => {
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { disableRipple: true, style: { padding: 0 }, sx: sx, onClick: settingsOnCLick, children: _jsx("img", { src: icon, style: { height: "2vh" } }) }), settingsComponent] }));
};
export default MesSettings;
