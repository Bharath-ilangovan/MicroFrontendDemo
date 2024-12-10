import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from "@mui/material";
import ModuleIcon from "../../../assets/Module.svg";
const MesModuleButton = ({ onClick }) => {
    return (_jsx(IconButton, { sx: {
            width: "5vh",
            height: "5vh",
            borderRadius: 0,
            backgroundColor: "#F15D22",
            top: 0,
            left: 0,
            p: 0,
            "&:hover": {
                backgroundColor: "#F15D22",
                opacity: 0.95,
            },
        }, disableRipple: true, onClick: onClick, children: _jsx("img", { src: ModuleIcon, style: { height: "2.5vh" } }) }));
};
export default MesModuleButton;
