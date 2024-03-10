import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  // {
  //   id: 179,
  //   label: 'MENUITEMS.MULTILEVEL.TEXT',
  //   icon: 'ri-share-line',
  //   isCollapsed: true,
  //   subItems: [
  //     {
  //       id: 180,
  //       label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
  //       parentId: 179,
  //     },
  //     {
  //       id: 181,
  //       label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
  //       isCollapsed: true,
  //       subItems: [
  //         {
  //           id: 182,
  //           label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
  //           parentId: 181,
  //         },
  //         {
  //           id: 183,
  //           label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
  //           parentId: 181,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 495,
  //   label: 'TESTING',
  //   isTitle: true,
  // },
  {
    id: 496,
    label: 'Administracion',
    icon: 'ri-pages-line',
    isCollapsed: true,
    subItems: [
      {
        id: 497,
        label: 'Listado',
        link: '/users/list-users',
        parentId: 496,
      },
    ],
  },
];
