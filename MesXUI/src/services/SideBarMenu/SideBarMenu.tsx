import { FC, ReactNode, SVGProps } from "react";
import MasterIcon from "../../assets/sidebar/MasterDataIconFC";
import WipIcon from "../../assets/sidebar/WipIconFC";
import CmmsIconFC from "../../assets/sidebar/CmmsIconFC";
import QmsIconFC from "../../assets/sidebar/QmsIconFC";
import IiotIcon from "../../assets/sidebar/IIOTFC";
import AiIconFC from "../../assets/sidebar/AiIconFC";

// Interface for child items
export interface IChildItem {
	label: string;
	path: string;
	page: ReactNode | JSX.Element;
	icon?: FC<SVGProps<SVGSVGElement>>;
	children?: IChildItem[];
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
		label: "Technician",
		path: "cmms-setup/technician",
		page: <h1>Technician</h1>,
	},
	{
		label: "Reschedule Reasons",
		path: "cmms-setup/reschedule-reasons",
		page: <h1>Reschedule Reasons</h1>,
	},
	{
		label: "Work Order Progress Status",
		path: "cmms-setup/work-order",
		page: <h1>Work Order Progress Status</h1>,
	},
	{
		label: "Equipment Problems",
		path: "equipment-problems",
		page: <h1>Equipment Problems</h1>,
	},
	{
		label: "Equipment Status",
		path: "cmms-setup/equipment-status",
		page: <h1>Equipment Status</h1>,
	},
	{
		label: "Maintenance Definitions",
		path: "cmms-setup/maintenance-definitions",
		page: <h1>Maintenance Definitions</h1>,
	},
	{
		label: "Task List",
		path: "cmms-setup/task-list",
		page: <h1>Task List</h1>,
	},
	{
		label: "Task Group",
		path: "cmms-setup/task-group",
		page: <h1>Task Group</h1>,
	},
];

// Child Items (WIP)
const WIP_ITEMS: IChildItem[] = [
	{
		label: "Equipment Setup",
		path: "equipment-setup",
		page: <h1>Equipment Setup</h1>,
	},
	{
		label: "Machine Material Setup",
		path: "machine-material-setup",
		page: <h1>Machine Material Setup</h1>,
	},
	{
		label: "Equipment Tool Setup",
		path: "equipment-tool-setup",
		page: <h1>Equipment Tool Setup</h1>,
	},
	{
		label: "Defects",
		path: "defects",
		page: <h1>Defects</h1>,
	},
	{
		label: "Lot Adjustment Reasons",
		path: "lot-adjustment-reasons",
		page: <h1>Lot Adjustment Reasons</h1>,
	},
	{
		label: "Hold Codes",
		path: "hold-codes",
		page: <h1>Hold Codes</h1>,
	},
	{
		label: "Rework Reasons",
		path: "rework-reasons",
		page: <h1>Rework Reasons</h1>,
	},
];

// Child Items (CMMS)
const CMMS_ITEMS: IChildItem[] = [
	{
		label: "Machine Material Setup",
		path: "machine-material-setup",
		page: <h1>Machine Material Setup</h1>,
	},
	{
		label: "Defects",
		path: "defects",
		page: <h1>Defects</h1>,
	},
	{
		label: "Lot Adjustment Reasons",
		path: "lot-adjustment-reasons",
		page: <h1>Lot Adjustment Reasons</h1>,
	},
	{
		label: "Equipment Tool Setup",
		path: "equipment-tool-setup",
		page: <h1>Equipment Tool Setup</h1>,
	},
	{
		label: "Equipment Setup",
		path: "equipment-setup",
		page: <h1>Equipment Setup</h1>,
	},

	{
		label: "Hold Codes",
		path: "hold-codes",
		page: <h1>Hold Codes</h1>,
	},
	{
		label: "Rework Reasons",
		path: "rework-reasons",
		page: <h1>Rework Reasons</h1>,
	},
];

// Parent Items
export const parentItem: IParentItem[] = [
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
		children: WIP_ITEMS,
		selectedIcon: WipIcon,
	},
	{
		icon: CmmsIconFC,
		label: "CMMS",
		path: "cmms",
		children: CMMS_ITEMS,
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
