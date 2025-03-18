import React from "react";
import { useMatches } from "react-router-dom";
import PageTitleBar from "src/components/PageTitleBar/PageTitleBar";
import { WrenchSettingsRegular } from "@fluentui/react-icons";

const Demo = () => {
	const matches = useMatches();
	const crumbs = matches
		.filter((match: any) => Boolean(match.handle?.crumb))
		.map((match: any) => match.handle.crumb(match.data));
	return (
		<>
			<PageTitleBar imgSrc={<WrenchSettingsRegular />} />

			{JSON.stringify(crumbs)}
		</>
	);
};

export default Demo;
