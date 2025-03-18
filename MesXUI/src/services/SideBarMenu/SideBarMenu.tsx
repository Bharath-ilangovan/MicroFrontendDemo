import { FC, ReactNode, SVGProps } from "react";
import MasterIcon from "../../assets/sidebar/MasterDataIconFC";
import WipIcon from "../../assets/sidebar/WipIconFC";
import CmmsIconFC from "../../assets/sidebar/CmmsIconFC";
import QmsIconFC from "../../assets/sidebar/QmsIconFC";
import IiotIcon from "../../assets/sidebar/IIOTFC";
import AiIconFC from "../../assets/sidebar/AiIconFC";
import Demo from "src/pages/Demo";
import { Outlet } from "react-router-dom";

// Interface for child items
export interface IChildItem {
	label: string;
	path: string;
	page: ReactNode | JSX.Element;
	children?: IChildItem[];
	renderChild: boolean;
}

// Interface for parent items
export interface IParentItem {
	icon: FC<SVGProps<SVGSVGElement>>;
	label: string;
	path: string;
	children: IChildItem[];
	selectedIcon: FC<SVGProps<SVGSVGElement>>;
}

// Child Items (Master)
const MASTER_ITEMS: IChildItem[] = [
	{
		label: "CMMS Setup",
		path: "cmms-setup",
		page: <Outlet />,
		renderChild: true,
		children: [
			{
				label: "Technician",
				path: "technician",
				page: <h1>Technician</h1>,
				renderChild: false,
			},
			{
				label: "Reschedule Reasons",
				path: "reschedule-reasons",
				page: <Demo />,
				renderChild: false,
			},
			{
				label: "Work Order Progress Status",
				path: "work-order",
				page: <h1>Work Order Progress Status</h1>,
				renderChild: false,
			},
			{
				label: "Equipment Problems",
				path: "equipment-problems",
				page: <h1>Equipment Problems</h1>,
				renderChild: false,
			},
			{
				label: "Equipment Status",
				path: "equipment-status",
				page: <h1>Equipment Status</h1>,
				renderChild: false,
			},
			{
				label: "Maintenance Definitions",
				path: "maintenance-definitions",
				page: <h1>Maintenance Definitions</h1>,
				renderChild: false,
			},
			{
				label: "Task List",
				path: "task-list",
				page: <h1>Task List</h1>,
				renderChild: false,
			},
			{
				label: "Task Group",
				path: "task-group",
				page: <h1>Task Group</h1>,
				renderChild: false,
			},
		]
	}
];

// Child Items (WIP)
// const WIP_ITEMS: IChildItem[] = [
// 	{
// 		label: "Equipment Setup",
// 		path: "equipment-setup",
// 		page: <h1>Equipment Setup</h1>,
// 	},
// 	{
// 		label: "Machine Material Setup",
// 		path: "machine-material-setup",
// 		page: <h1>Machine Material Setup</h1>,
// 	},
// 	{
// 		label: "Equipment Tool Setup",
// 		path: "equipment-tool-setup",
// 		page: <h1>Equipment Tool Setup</h1>,
// 	},
// 	{
// 		label: "Defects",
// 		path: "defects",
// 		page: <h1>Defects</h1>,
// 	},
// 	{
// 		label: "Lot Adjustment Reasons",
// 		path: "lot-adjustment-reasons",
// 		page: <h1>Lot Adjustment Reasons</h1>,
// 	},
// 	{
// 		label: "Hold Codes",
// 		path: "hold-codes",
// 		page: <h1>Hold Codes</h1>,
// 	},
// 	{
// 		label: "Rework Reasons",
// 		path: "rework-reasons",
// 		page: <h1>Rework Reasons</h1>,
// 	},
// ];
// const CMMS_ITEMS: IChildItem[] = [
// 	{
// 		label: "Machine Material Setup",
// 		path: "machine-material-setup",
// 		page: <h1>Machine Material Setup</h1>,
// 	},
// 	{
// 		label: "Defects",
// 		path: "defects",
// 		page: <h1>Defects</h1>,
// 	},
// 	{
// 		label: "Lot Adjustment Reasons",
// 		path: "lot-adjustment-reasons",
// 		page: <h1>Lot Adjustment Reasons</h1>,
// 	},
// 	{
// 		label: "Equipment Tool Setup",
// 		path: "equipment-tool-setup",
// 		page: <h1>Equipment Tool Setup</h1>,
// 	},
// 	{
// 		label: "Equipment Setup",
// 		path: "equipment-setup",
// 		page: <h1>Equipment Setup</h1>,
// 	},

// 	{
// 		label: "Hold Codes",
// 		path: "hold-codes",
// 		page: <h1>Hold Codes</h1>,
// 	},
// 	{
// 		label: "Rework Reasons",
// 		path: "rework-reasons",
// 		page: <h1>Rework Reasons</h1>,
// 	},
// ];

// Parent Items
const parentItem: IParentItem[] = [
	{
		icon: MasterIcon,
		label: "Master",
		path: "master",
		children: MASTER_ITEMS,
		selectedIcon: MasterIcon,
	},
	{
		icon: WipIcon,
		label: "WIP",
		path: "wip",
		// children: WIP_ITEMS,
		children: [],
		selectedIcon: WipIcon,
	},
	{
		icon: CmmsIconFC,
		label: "CMMS",
		path: "cmms",
		children: [],
		selectedIcon: CmmsIconFC,
	},
	{
		icon: QmsIconFC,
		label: "QMS",
		path: "qms",
		children: [],
		selectedIcon: QmsIconFC,
	},
	// {
	// 	icon: InventoryIcon,
	// 	label: "Inventory",
	// 	path: "inventory",
	// 	children: [],
	// 	selectedIcon: InventoryIcon,
	// },
	{
		icon: IiotIcon,
		label: "IIOT",
		path: "iiot",
		children: [],
		selectedIcon: IiotIcon,
	},
	{
		icon: AiIconFC,
		label: "AI",
		path: "ai",
		children: [],
		selectedIcon: AiIconFC,
	},
];

Object.freeze(parentItem);

export { parentItem };
