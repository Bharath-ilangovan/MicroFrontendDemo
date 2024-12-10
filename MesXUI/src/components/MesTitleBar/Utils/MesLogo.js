import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from "@mui/material";
const MesLogo = ({ onClick, sx, icon }) => {
    return (_jsx(Icon, { onClick: onClick, style: {
            padding: 0,
            height: "3.3vh",
            minHeight: "3.3vh",
            maxHeight: "3.3vh",
        }, sx: [sx, { mx: 1 }], children: _jsx("img", { src: icon }) }));
};
export default MesLogo;
