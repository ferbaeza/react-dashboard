export const menu = [
  {
    id: 1,
    name: "Principal",
    icon: "icons/home.svg",
    hijos: [
      {
        id: 1,
        name: "Home",
        url: "/",
        icon: "icons/home.svg",
      },
    ],
  },
  {
    id: 2,
    name: "Listado",
    icon: "icons/home.svg",
    hijos: [
      {
        id: 1,
        name: "Home",
        url: "/",
        icon: "icons/home.svg",
      },
      {
        id: 2,
        name: "Tablas",
        url: "/tablas",
        icon: "icons/order.svg",
      },
      {
        id: 3,
        name: "Usuarios",
        url: "/usuarios",
        icon: "icons/user.svg",
      },
    ],
  },
  {
    id: 3,
    name: "Configuracion",
    icon: "icons/settings.svg",
    hijos: [
      {
        id: 1,
        name: "Configu",
        url: "/login/",
        icon: "icons/tools.svg",
      },
      {
        id: 2,
        name: "Logout",
        url: "/login",
        icon: "icons/logout-g.svg",
      },
    ],
  },
];
