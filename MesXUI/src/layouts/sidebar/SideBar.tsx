import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
	InputOnChangeData,
	SearchBox,
	SearchBoxChangeEvent,
	Tooltip,
} from "@fluentui/react-components";
import {
	DismissRegular,
	MoreHorizontal24Regular,
	SearchRegular,
} from "@fluentui/react-icons";
import MenuGroup from "./MenuGroup";
import { IChildItem, IParentItem, parentItem } from "src/services/SideBarMenu/SideBarMenu";

interface ISideBar {
	open: boolean;
	handleCloseSideBar: (arg: boolean) => void;
}

const SideBar: FC<ISideBar> = ({ handleCloseSideBar, open }) => {
	const [activePath, setActivePath] = useState<string>(parentItem[0].path);
	const [activeLabel, setActiveLabel] = useState<string>(parentItem[0].label);
	const [toggleSearch, setToggleSearch] = useState<boolean>(false);
	const [searchQuery, setsearchQuery] = useState<string | undefined>(
		undefined,
	);
	// const [filteredData, setFilteredData] = useState<string | undefined>();

	const handleSearchQuery = (_: any, data: InputOnChangeData) =>
		setsearchQuery(data.value);

	// const handleSearch = useCallback(() => {}, []);

	const handleSearchClose = () => {
		setToggleSearch(false);
	};
	const handleFilterClick = () => {
		setToggleSearch(!toggleSearch);
	};
	const handleSideBarIconToggle = (parent: IParentItem) => {
		if (activePath === parent.path) {
			handleCloseSideBar(!open);
		} else {
			setActivePath(parent.path);
			setActiveLabel(parent.label);
		}
	};

	return (
		<div
			style={{
				display: "flex",
				height: "100%",
				margin: 0,
			}}>
			{/* PARENT MENUS */}
			<div
				style={{
					minWidth: "6.8vh",
					backgroundColor: "#f8f8f8",
					color: "black",
					padding: "1.2vh 0",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					position: "fixed",
					top: "4vh",
					bottom: "0",
				}}>
				<ul
					style={{
						listStyleType: "none",
						padding: "0",
						margin: "0",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "0.5vh",
						width: "fit-content",
					}}>
					{parentItem.map((parent: IParentItem, index: number) => {
						const Icon = activePath.includes(parent.path)
							? parent.selectedIcon
							: parent.icon;
						return (
							<Tooltip
								key={index}
								content={parent.label}
								relationship="label">
								<li
									style={
										{
											padding: "1vh 0.5vh",
											fontSize: "1.6vh",
											cursor: "pointer",
											width: "100%",
											textAlign: "center" as const,
											display: "flex",
											flexDirection: "column" as const,
											alignItems: "center",
											transition:
												"background 0.3s ease, border-left 0.3s ease, color 0.3s ease",
											color: activePath.includes(
												parent.path,
											)
												? "#FFFFFF"
												: "#1357A5",
											backgroundColor:
												activePath.includes(parent.path)
													? "#002856"
													: "transparent",
											borderLeft: activePath.includes(
												parent.path,
											)
												? "0.2vh solid #002856"
												: "none",
											":hover": {
												backgroundColor:
													activePath.includes(
														parent.path,
													)
														? "#F15D22"
														: "#e6e6e6",
												color: activePath.includes(
													parent.path,
												)
													? "#FFFFFF"
													: "#002856",
											},
										} as React.CSSProperties
									}
									onClick={() =>
										handleSideBarIconToggle(parent)
									}>
									<Icon />
									{parent.label}
								</li>
							</Tooltip>
						);
					})}
				</ul>
				{/* Three-Dot Menu at Bottom of Sidebar */}
				<div>
					<MoreHorizontal24Regular
						style={{
							cursor: "pointer",
							color: "black",
							fontSize: "2.2vh",
							marginTop: "1.4vh",
						}}
					/>
				</div>
			</div>
			{/* PARENT SUBMENU(CHILD) */}
			{open && (
				<div
					style={{
						width: "35vh",
						color: "black",
						display: "flex",
						flexDirection: "column",
						position: "fixed",
						top: "4vh",
						// left: "7.5vh",
						left: "7.5vh",
						bottom: "0",
						backgroundColor: "#f5f5f5",
						boxShadow: "-0.4vh 0 0.8vh rgba(0, 0, 0, 0.1)",
						overflowY: "auto",
						height: "calc(100vh - 20px)",
						zIndex: 1,
						msOverflowStyle: "none",
						scrollbarWidth: "none",
					}}>
					{/* SERACH WITH TITLE */}
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							fontWeight: "bold",
							height: "60px",
							paddingBottom: "4vh",
							fontSize: "16px",
							padding: "24px",
							borderBottom: "1px solid #ccc",
							width: "35vh",
							boxSizing: "border-box",
							position: "sticky",
							top: "0",
							backgroundColor: "#f5f5f5",
							color: "#1357A5",
							zIndex: 2,
						}}>
						{toggleSearch ? (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									width: "100%",
									height: "100%",
								}}>
								<SearchBox
									placeholder="Search..."
									style={{ width: "100%" }}
									onChange={handleSearchQuery}
								/>
								<DismissRegular
									style={{
										fontSize: "2.2vh",
										color: "black",
										cursor: "pointer",
										marginLeft: "1vh",
									}}
									onClick={handleSearchClose}
								/>
							</div>
						) : (
							<>
								{activeLabel}
								<SearchRegular
									style={{
										fontSize: "2.4vh",
										color: "black",
										cursor: "pointer",
									}}
									onClick={handleFilterClick}
								/>
							</>
						)}
					</div>
					<MenuGroup
						activePath={activePath}
						activeLabel={
							parentItem.find((item) => item.path === activePath)
								?.label as string
						}
						children={
							parentItem.find((item) => item.path === activePath)
								?.children as IChildItem[]
						}
					/>
				</div>
			)}
		</div>
	);
};

export default SideBar;
