import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import SideBarDemo from "./sidebar/SideBar";
const Layout = () => {
	const [toggleSideBar, setToggleSideBar] = useState<boolean>(true);
	const handleToggleSidebar = (arg: boolean) => {
		setToggleSideBar(arg);
	};
	return (
		<React.Fragment>
			<Header />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					margin: 0,
				}}>
				<SideBarDemo
					open={toggleSideBar}
					handleCloseSideBar={handleToggleSidebar}
				/>
				<div
					style={{
						flex: 1,
						marginLeft: toggleSideBar ? "42.5vh" : "7.5vh",
						background: "#fff",
						// padding: "20px",
					}}>
					<Outlet />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
