// interface IMenuSideBarGroup {
//   groupId: number;
//   icon?: ReactNode;
//   groupTitle: string;
//   defaultIcon?: ReactNode | any;
//   path?: string;
//   children: IMenuChildren[];
// }

// export type IMenuChildren = {
//   icon?: ReactNode | any;
//   defaultIcon?: ReactNode | any;
//   pageId: number;
//   pageName: string;
//   path: string;
//   children?: MenuGroup[] | any;
//   padding?: boolean;
//   isEnable: boolean;
// };

enum ModuleRoutes {
  MasterData = "/dashboard/masterdata",
  Security = "/dashboard/security",
  WIP = "/dashboard/WIP",
  Maintenance = "/dashboard/Maintenance",
  Inventory = "/dashboard/Inventory",
  QMS = "/dashboard/QMS",
  IIOTHub = "/dashboard/IIOTHub",
  IntegrationManager = "/dashboard/IntegrationManager",
  FlowManager = "/dashboard/FlowManager",
  DashboardBuilder = "/dashboard/DashboardBuilder",
  ARManager = "/dashboard/ARManager",
  LicenseManager = "/dashboard/LicenseManager",
}

type IModule = keyof typeof ModuleRoutes;
