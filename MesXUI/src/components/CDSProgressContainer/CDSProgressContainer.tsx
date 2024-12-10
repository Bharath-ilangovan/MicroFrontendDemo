import { Box, Paper, Stack, Typography, Grid } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { useMatches } from "react-router-dom";

import ImageNA from "./ImageNA.svg";

const regex = /\/[^/]*\//g;

const CDSProgressContainer: FC<{
    children?: ReactNode | ReactNode[];
    icon: string | undefined;
    customCrumb?: string | undefined;
    variant?: "standard" | "tabs";
}> = ({ children, icon, customCrumb, variant = "standard" }) => {
    const matches = useMatches();
    const crumbs = matches
        .filter((match: any) => Boolean(match.handle?.crumb))
        .map((match: any) => match.handle.crumb(match.data));
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{
                pl: "3.3vh",
                pt: "4.1vh",
                pb: variant === "tabs" ? "1.5vh" : "3.3vh",
                pr: "3.3vh",
                backgroundColor: "#fff",
            }}
        >
            <Stack
                direction={"row"}
                spacing={"2vh"}
                alignItems={"center"}
            >
                <Box
                    sx={{
                        width: "7vh",
                        height: "7vh",
                        borderRadius: "50%",
                        backgroundColor: "rgba(67, 118, 175, 0.35)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img src={icon || ImageNA} style={{ height: "3.5vh" }} />
                </Box>
                <Stack
                    sx={{
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{

                            color: "#939393",
                            fontWeight: 400,
                        }}
                        fontSize={"1.75vh"}
                        // fontSize={20}
                    >
                        {crumbs[0]?.length > 0
                            ? crumbs[crumbs.length - 2]
                            : crumbs[0] || "No Label"}
                    </Typography>
                    <Typography
                        sx={{
                            color: "#5C5C5C",
                            fontWeight: 550,
                        }}
                        fontSize={"2.5vh"}
                    >
                        {typeof customCrumb === "string"
                            ? customCrumb
                            : crumbs[0]?.length > 0
                                ? crumbs[crumbs?.length - 1]
                                : crumbs[1] || "No Label"}
                    </Typography>
                </Stack>
            </Stack>

            <Stack
                sx={{
                    height: "6vh",
                }}
                direction={"row"}
                spacing={"2.4vh"}
            >
                {children}
            </Stack>
        </Stack>
    );
};

export default CDSProgressContainer;
