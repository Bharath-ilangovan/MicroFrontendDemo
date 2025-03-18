import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildItem } from "../data";
import { CaretDownFilled } from "@fluentui/react-icons";

const MenuGroup: FC<{
	activePath: string;
	activeLabel: string;
	children: IChildItem[];
}> = ({ activePath, children, activeLabel }) => {
	const navigate = useNavigate();

	const [isExpanded, setIsExpanded] = useState<string[]>([]);

	const handleToggle = (path: string): void => {
		setIsExpanded(
			(prevExpanded) =>
				prevExpanded.includes(path)
					? prevExpanded.filter((item) => item !== path) // Close the path if it's already expanded
					: [...prevExpanded, path], // Open the path if it's not expanded
		);
	};

	const handleNavigation = (path: string): void => {
		navigate(`${activePath + "/" + path}`);
	};

	return (
		<div
			style={{
				paddingTop: "1vh",
				overflowY: "auto",
			}}>
			<React.Fragment key={activePath}>
				<div style={{ padding: "12px" }}>
					{/* Menu Group Label */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							cursor: "pointer",
							gap: "8px",
						}}
						onClick={() => handleToggle(activePath)}>
						<CaretDownFilled
							style={{
								fontSize: "14px",
								color: "#616161",
								transform: isExpanded.includes(activePath)
									? "rotate(180deg)"
									: "rotate(0deg)",
							}}
						/>
						<span>{activeLabel}</span>
					</div>
					{/* Group Menu's */}
					{isExpanded.includes(activePath) && (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								fontSize: "14px",
								maxHeight: "calc(100vh - 200px)",
								overflowY: "auto",
							}}>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									fontSize: "15px",
									marginTop: "2vh",
									color: " #616161",
								}}>
								{children.map(
									(item: IChildItem, index: number) => (
										<>
											{item?.title && (
												<div
													style={{
														display: "flex",
														flexDirection: "row",
														alignItems: "center",
														paddingLeft: "30px",
													}}>
													<div
														style={{
															border: "1px solid #cecece",
															width: "20px",
															height: "20px",
															borderRadius: "5px",
														}}></div>
													<p className="sidebar-child-label">
														{item?.title}
													</p>
												</div>
											)}
											<p
												key={index}
												className="sidebar-child-item"
												onClick={() =>
													handleNavigation(item.path)
												}>
												{item.label}
											</p>
										</>
									),
								) || (
									<p
										key={"-no-label"}
										className="sidebar-child-item">
										No Data
									</p>
								)}
							</div>
						</div>
					)}
				</div>
			</React.Fragment>
		</div>
	);
};
export default MenuGroup;
