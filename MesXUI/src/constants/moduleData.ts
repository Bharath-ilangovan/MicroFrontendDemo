import MasterDataIcon from "../assets/mesModuleIcons/MasterDataIcon.svg";
import SecurityIcon from "../assets/mesModuleIcons/SecurityIcon.svg";
import WIPFillIcon from "../assets/mesModuleIcons/WIPFillIcon.svg";
import MaintenanceIcon from "../assets/mesModuleIcons/MaintenanceIcon.svg";
import InventoryIcon from "../assets/mesModuleIcons/InventoryIcon.svg";
import QMSIcon from "../assets/mesModuleIcons/QMSIcon.svg";
import IntegrationManagerIcon from "../assets/mesModuleIcons/IntegrationManagerIcon.svg";
import FlowManagerIcon from "../assets/mesModuleIcons/FlowManagerIcon.svg";
import DashBoardBuilderIcon from "../assets/mesModuleIcons/DashBoardBuilderIcon.svg";
import ARManagerFillIcon from "../assets/mesModuleIcons/ARManagerFillIcon.svg";
import LicenseManagerIcon from "../assets/mesModuleIcons/LicenseManagerIcon.svg";
import MasterDataIconLight from "../assets/mesModuleIcons/MasterDataIconLight.svg";
import SecurityIconLight from "../assets/mesModuleIcons/SecurityIconLight.svg";
import WIPFillIconLight from "../assets/mesModuleIcons/WIPFillIconLight.svg";
import MaintenanceIconLight from "../assets/mesModuleIcons/MaintenanceIconLight.svg";
import InventoryIconLight from "../assets/mesModuleIcons/InventoryIconLight.svg";
import QMSIconLight from "../assets/mesModuleIcons/QMSIconLight.svg";
import IntegrationManagerIconLight from "../assets/mesModuleIcons/IntegrationManagerIconLight.svg";
import FlowManagerIconLight from "../assets/mesModuleIcons/FlowManagerIconLight.svg";
import DashBoardBuilderIconLight from "../assets/mesModuleIcons/DashBoardBuilderIconLight.svg";
import ARManagerFillIconLight from "../assets/mesModuleIcons/ARManagerFillIconLight.svg";
import LicenseManagerIconLight from "../assets/mesModuleIcons/LicenseManagerIconLight.svg";
interface SideMenu {
  text: string;
  icon: string;
  iconLight: string;
  node: number;
  path: string;
}
export const MesSideMenuData: SideMenu[] = [
  {
    text: "MASTER DATA",
    icon: MasterDataIcon,
    iconLight: MasterDataIconLight,
    node: 1,
    path: "/dashboard/masterdata",
  },
  {
    text: "SECURITY",
    icon: SecurityIcon,
    iconLight: SecurityIconLight,
    node: 2,
    path: "/dashboard/security",
  },
  {
    text: "WIP",
    icon: WIPFillIcon,
    iconLight: WIPFillIconLight,
    node: 3,
    path: "/dashboard/WIP",
  },
  {
    text: "MAINTENANCE",
    icon: MaintenanceIcon,
    iconLight: MaintenanceIconLight,
    node: 4,
    path: "/dashboard/Maintenance",
  },
  {
    text: "INVENTORY",
    icon: InventoryIcon,
    iconLight: InventoryIconLight,
    node: 5,
    path: "/dashboard/Inventory",
  },
  {
    text: "QMS",
    icon: QMSIcon,
    iconLight: QMSIconLight,
    node: 6,
    path: "/dashboard/QMS",
  },
  {
    text: "IIOT HUB",
    icon: InventoryIcon,
    iconLight: InventoryIconLight,
    node: 7,
    path: "/dashboard/IIOTHub",
  },
  {
    text: "INTEGRATION MANAGER",
    icon: IntegrationManagerIcon,
    iconLight: IntegrationManagerIconLight,
    node: 8,
    path: "/dashboard/IntegrationManager",
  },
  {
    text: "FLOW MANAGER",
    icon: FlowManagerIcon,
    iconLight: FlowManagerIconLight,
    node: 9,
    path: "/dashboard/FlowManager",
  },
  {
    text: "DASHBOARD BUILDER",
    icon: DashBoardBuilderIcon,
    iconLight: DashBoardBuilderIconLight,
    node: 10,
    path: "/dashboard/DashboardBuilder",
  },
  {
    text: "AR MANAGER",
    icon: ARManagerFillIcon,
    iconLight: ARManagerFillIconLight,
    node: 11,
    path: "/dashboard/ARManager",
  },
  {
    text: "LICENSE MANAGER",
    icon: LicenseManagerIcon,
    iconLight: LicenseManagerIconLight,
    node: 12,
    path: "/dashboard/LicenseManager",
  },
];
