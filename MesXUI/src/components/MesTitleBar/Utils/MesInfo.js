import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from "@mui/material";
const MesInfo = ({ icon, onClick, sx }) => {
    return (_jsx(IconButton, { disableRipple: true, onClick: onClick, style: { padding: 0 }, sx: sx, children: _jsx("img", { src: icon, style: { height: "2vh" } }) }));
};
export default MesInfo;
