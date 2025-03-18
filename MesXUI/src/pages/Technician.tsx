import React from "react";
import { WrenchSettingsRegular } from "@fluentui/react-icons";
import PageTitleBar from "src/components/PageTitleBar/PageTitleBar";

const Technician = () => {
	return (
		<>
			<PageTitleBar imgSrc={<WrenchSettingsRegular />} />
		</>
	);
};

export default Technician;
