import React from "react";
import {
	WrenchSettingsRegular,
} from "@fluentui/react-icons";
import PageTitleBar from "src/components/PageTitleBar/PageTitleBar";

const Demo = () => {
	return (
		<>
			<PageTitleBar imgSrc={<WrenchSettingsRegular />} />
		</>
	);
};

export default Demo;
