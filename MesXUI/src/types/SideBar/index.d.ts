// interface IMenuSideBarGroup {
//   groupId: number;
//   icon?: ReactNode;
//   groupTitle: string;
//   defaultIcon?: ReactNode | any;
//   path?: string;
//   children: IMenuChildren[];
// }

import { ModuleRoutes } from "src/constants/SideBarData";

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


type IModule = keyof typeof ModuleRoutes;
