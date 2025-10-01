import { SidebarMenuType } from "../../Types/Layout";

export const menuList: SidebarMenuType[] = [
  {
    title: "- Pages",
    menu: [
      {
        id: 23,
        title: "Sample Page",
        url: `/pages/sample-page`,
        icon: "sample-page",
        type: "link",
      },
    ],
  },
  {
    title: "- Miscellaneous",
    menu: [
      {
        id: 33,
        title: "Support Ticket",
        icon: "support-tickets",
        type: "link",
        active: false,
        url: `https://support.pixelstrap.com/portal/en/signin`,
      },
    ],
  },
];
