import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, MenuItem, Tooltip, Typography, Menu, IconButton, Stack, Box, } from "@mui/material";
import React, { useEffect, useState } from "react";
const textStyle = {
    color: "#000",
    fontSize: "16px",
    py: 1.3,
    fontWeight: 500,
    letterSpacing: 0.5,
};
const MesProfile = ({ src, tooltiptitle, borderColor, sx, size, logoutOnClick, username, role, }) => {
    const [backgroundColor, setBackgroundColor] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const stringToColour = (str) => {
        let hash = 0;
        str.split("").forEach((char) => {
            hash = char.charCodeAt(0) + ((hash << 5) - hash);
        });
        let colour = "#";
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xff;
            colour += value.toString(16).padStart(2, "0");
        }
        return colour;
    };
    useEffect(() => {
        if (username) {
            setBackgroundColor(stringToColour(username === null || username === void 0 ? void 0 : username.replace(/[^a-zA-Z0-9]+/g, "")));
        }
    }, [username]);
    return (_jsxs(React.Fragment, { children: [_jsx(Tooltip, { title: tooltiptitle || "profile", arrow: true, children: _jsx(IconButton, { onClick: handleClick, size: "small", sx: { ml: "0.2vh" }, "aria-controls": open ? "account-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, children: _jsx(Avatar, { variant: "circular", 
                        // src={src}
                        alt: "#", style: {
                            width: size ? size : "3vh",
                            height: size ? size : "3vh",
                            border: `0.2vh solid ${borderColor !== null && borderColor !== void 0 ? borderColor : "#cecece"}`,
                            backgroundColor: backgroundColor,
                            textTransform: "capitalize",
                            fontSize: "2vh",
                        }, sx: sx, children: (username && (username === null || username === void 0 ? void 0 : username.replace(/[^a-zA-Z0-9]+/g, "")[0])) || "A" }) }) }), _jsxs(Menu, { anchorEl: anchorEl, open: open, onClose: handleClose, onClick: handleClose, sx: {
                    width: "27.5vh",
                    ".MuiList-root": {
                        py: 0,
                        borderBottom: "0.2vh solid #002856",
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                    },
                    ".MuiPaper-root": {
                        borderBottom: "0.2vh solid #002856",
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                    },
                }, slotProps: {
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: "0.15vh",
                            "& .MuiAvatar-root": {
                                width: "3.2vw",
                                height: "3.2vh",
                                ml: "-0.05vh",
                                mr: "0.1vh",
                            },
                            "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: "1vh",
                                height: "1vh",
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                    },
                }, transformOrigin: { horizontal: "right", vertical: "top" }, anchorOrigin: { horizontal: "right", vertical: "bottom" }, children: [_jsxs(MenuItem, { sx: { py: "0.14vh", width: "27.5vh" }, children: [_jsx(Avatar
                            // src={src}
                            , { 
                                // src={src}
                                style: {
                                    width: "2.9vh",
                                    height: "2.9vh",
                                    border: `0.2vh solid ${borderColor !== null && borderColor !== void 0 ? borderColor : "#cecece"}`,
                                    backgroundColor: backgroundColor,
                                    textTransform: "capitalize",
                                    fontSize: "2vh",
                                }, children: (username && (username === null || username === void 0 ? void 0 : username.replace(/[^a-zA-Z0-9]+/g, "")[0])) || "A" }), _jsxs(Stack, { children: [_jsx(Typography, { sx: {
                                            fontWeight: 600,
                                            textTransform: "capitalize",
                                        }, fontSize: { md: "1rem", lg: "0.8rem", xl: "0.6rem" }, children: username || "Username" }), _jsx(Typography, { sx: { fontWeight: 300 }, fontSize: "0.625rem", children: role || "Role" })] })] }), _jsx(Box, { sx: { borderBottom: 1, color: "#E0E0E0" } }), _jsx(MenuItem, { onClick: logoutOnClick, sx: textStyle, disabled: true, children: "Edit Profile" }), _jsx(MenuItem, { onClick: logoutOnClick, sx: textStyle, disabled: true, children: "Add Another Account" }), _jsx(Box, { sx: { borderBottom: 1, color: "#E0E0E0" } }), _jsx(MenuItem, { onClick: logoutOnClick, sx: textStyle, children: "Logout" })] })] }));
};
export default MesProfile;
