import { Text } from "@fluentui/react-components";
import React from "react";
import useCurrentRoute from "src/hooks/Navigation/useCurrentRoute";

interface IPageTitleBar {
	imgSrc?: React.ReactNode;
	description?: string; 
}

const PageTitleBar: React.FC<IPageTitleBar> = ({ imgSrc, description }) => {
	const { description: routeDescription } = useCurrentRoute();

	return (
		<header
			style={{
				display: "flex",
				alignItems: "center",
				height: "59px",
				backgroundColor: "white",
				color: "black",
				gap: "12px",
				position: "fixed",
				width: "100%",
				zIndex: 1000,
				paddingLeft: "15px",
				borderBottom: "1px solid #ccc",
				paddingBottom: "0px",
			}}
		>
			<div
				style={{
                    fontSize: "22px",
                    backgroundColor: "#f1f1f1",
                    color: "#F15D22",
                    padding: "5px",
                    borderRadius: "5px",
                    marginTop: "2px",
                  }}
			>
				{imgSrc}
			</div>
			<Text
				style={{
                    fontFamily: "sans-serif",
                    fontSize: "1.7vh",
                    fontWeight: "bold",
                    marginTop: "8px",
                    color: "#1357A5",
                  }} 
			>
				{description || routeDescription}
			</Text>
		</header>
	);
};

export default React.memo(PageTitleBar);
