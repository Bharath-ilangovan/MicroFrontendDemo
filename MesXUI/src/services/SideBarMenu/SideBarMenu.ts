import { ModuleRoutes } from '../../constants/SideBarData';
import { IMenuList } from '../../components/CDSSideBar/CDSSideBar';

interface Props {
    params: ModuleRoutes
}

const SideBarMenu = (props: Props): IMenuList[] => {

    const exampleData = [
        {
            id: 1,
            color: "",
            bgColor: "",
            label: "Process",
            childMenus: [
                {
                    id: 1,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Final Mixer Process",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 2,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Extruder",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
            ],
        },
    ];

    const MasterDataSideNavData: IMenuList[] = [
        {
            id: 1,
            color: "",
            bgColor: "",
            label: "Master Data",
            childMenus: [
                {
                    id: 1,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Employees",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 2,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Item Categories",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 3,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Item Subcategories",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 4,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Item Master",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 5,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Accounts",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
            ],
        },
        {
            id: 2,
            color: "",
            bgColor: "",
            label: "Factory Setup",
            childMenus: [
                {
                    id: 6,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Shifts",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 7,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Work Centers",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 8,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Skills",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 9,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Skillsets",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 10,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Tool Groups",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 11,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Tools",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 12,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Equipment Groups",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 13,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Equipment",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 14,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Equipment Priority",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 15,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Processes",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 16,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Production Lines",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
            ],
        },
        {
            id: 3,
            color: "",
            bgColor: "",
            label: "Production Configuration",
            childMenus: [
                {
                    id: 17,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Manufacturing Route",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 18,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Bill Of Materials",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
                {
                    id: 19,
                    onClick: () => { },
                    color: "",
                    bgColor: "",
                    label: "Product Spec",
                    icon: undefined,
                    hoverIcon: undefined,
                    activeIcon: undefined,
                    isActive: false,
                },
            ],
        },
    ];

    const selectModuleBasedSideBar = (params: ModuleRoutes): IMenuList[] => {
        switch (params) {
            case ModuleRoutes.MasterData:
                return MasterDataSideNavData as IMenuList[];

            // case ModuleRoutes.Security:
            //   return SecuritySideNavData as IMenuList[];

            // case ModuleRoutes.WIP:
            //   return WIPSideNavData as IMenuList[];

            // case ModuleRoutes.Maintenance:
            //   return MaintenanceSideNavData as IMenuList[];

            // case ModuleRoutes.Inventory:
            //   return InventorySideNavData as IMenuList[];

            // case ModuleRoutes.QMS:
            //   return QMSSideNavData as IMenuList[];

            // case ModuleRoutes.IIOTHub:
            //   return IIOTHubSideNavData as IMenuList[];

            // case ModuleRoutes.IntegrationManager:
            //   return IntegrationManagerSideNavData as IMenuList[];

            // case ModuleRoutes.FlowManager:
            //   return FlowManagerSideNavData as IMenuList[];

            // case ModuleRoutes.DashboardBuilder:
            //   return DashboardBuilderSideNavData as IMenuList[];

            // case ModuleRoutes.ARManager:
            //   return ARManagerSideNavData as IMenuList[];

            // case ModuleRoutes.LicenseManager:
            //   return LicenseManagerSideNavData as IMenuList[];

            default:
                return exampleData as IMenuList[];
        }
    };

    return selectModuleBasedSideBar(props.params) as IMenuList[];

}

export default SideBarMenu;