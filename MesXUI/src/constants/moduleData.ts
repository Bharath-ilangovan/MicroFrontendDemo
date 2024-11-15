import MasterDataIcon from "../assets/mesModuleIcons/MasterDataIcon.svg";
import SecurityIcon from "../assets/mesModuleIcons/SecurityIcon.svg";
import WIPFillIcon from "../assets/mesModuleIcons/WIPFillIcon.svg";
import MaintenanceIcon from "../assets/mesModuleIcons/MaintenanceIcon.svg";
import InventoryIcon from "../assets/mesModuleIcons/InventoryIcon.svg";
import QMSIcon from "../assets/mesModuleIcons/QMSIcon.svg";
import IIOTHubIcon from "../assets/mesModuleIcons/IIOTHubIcon.svg";
import IntegrationManagerIcon from "../assets/mesModuleIcons/IntegrationManagerIcon.svg";
import FlowManagerIcon from "../assets/mesModuleIcons/FlowManagerIcon.svg";
import DashBoardBuilderIcon from "../assets/mesModuleIcons/DashBoardBuilderIcon.svg";
import ARManagerFillIcon from "../assets/mesModuleIcons/ARManagerFillIcon.svg";
import LicenseManagerIcon from "../assets/mesModuleIcons/LicenseManagerIcon.svg";
interface SideMenu {
  text: string;
  icon: string;
  node: number;
  path: string;
}
export const MesSideMenuData: SideMenu[] = [
  {
    text: "MASTER DATA",
    icon: MasterDataIcon,
    node: 1,
    path: "/masterdata",
  },
  {
    text: "SECURITY",
    icon: SecurityIcon,
    node: 2,
    path: "/security",
  },
  {
    text: "WIP",
    icon: WIPFillIcon,
    node: 3,
    path: "/WIP",
  },
  {
    text: "MAINTENANCE",
    icon: MaintenanceIcon,
    node: 4,
    path: "/Maintenance",
  },
  {
    text: "INVENTORY",
    icon: InventoryIcon,
    node: 5,
    path: "/Inventory",
  },
  {
    text: "QMS",
    icon: QMSIcon,
    node: 6,
    path: "/QMS",
  },
  {
    text: "IIOT HUB",
    icon: InventoryIcon,
    node: 7,
    path: "/IIOTHub",
  },
  {
    text: "INTEGRATION MANAGER",
    icon: IntegrationManagerIcon,
    node: 8,
    path: "/IntegrationManager",
  },
  {
    text: "FLOW MANAGER",
    icon: FlowManagerIcon,
    node: 9,
    path: "/FlowManager",
  },
  {
    text: "DASHBOARD BUILDER",
    icon: DashBoardBuilderIcon,
    node: 10,
    path: "/DashboardBuilder",
  },
  {
    text: "AR MANAGER",
    icon: ARManagerFillIcon,
    node: 11,
    path: "/ARManager",
  },
  {
    text: "LICENSE MANAGER",
    icon: LicenseManagerIcon,
    node: 12,
    path: "/LicenseManager",
  },
];
