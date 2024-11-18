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
    path: "/dashboard/masterdata",
  },
  {
    text: "SECURITY",
    icon: SecurityIcon,
    node: 2,
    path: "/dashboard/security",
  },
  {
    text: "WIP",
    icon: WIPFillIcon,
    node: 3,
    path: "/dashboard/WIP",
  },
  {
    text: "MAINTENANCE",
    icon: MaintenanceIcon,
    node: 4,
    path: "/dashboard/Maintenance",
  },
  {
    text: "INVENTORY",
    icon: InventoryIcon,
    node: 5,
    path: "/dashboard/Inventory",
  },
  {
    text: "QMS",
    icon: QMSIcon,
    node: 6,
    path: "/dashboard/QMS",
  },
  {
    text: "IIOT HUB",
    icon: InventoryIcon,
    node: 7,
    path: "/dashboard/IIOTHub",
  },
  {
    text: "INTEGRATION MANAGER",
    icon: IntegrationManagerIcon,
    node: 8,
    path: "/dashboard/IntegrationManager",
  },
  {
    text: "FLOW MANAGER",
    icon: FlowManagerIcon,
    node: 9,
    path: "/dashboard/FlowManager",
  },
  {
    text: "DASHBOARD BUILDER",
    icon: DashBoardBuilderIcon,
    node: 10,
    path: "/dashboard/DashboardBuilder",
  },
  {
    text: "AR MANAGER",
    icon: ARManagerFillIcon,
    node: 11,
    path: "/dashboard/ARManager",
  },
  {
    text: "LICENSE MANAGER",
    icon: LicenseManagerIcon,
    node: 12,
    path: "/dashboard/LicenseManager",
  },
];
