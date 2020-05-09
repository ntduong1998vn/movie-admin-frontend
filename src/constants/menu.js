const data = [
  {
    id: "gogo",
    icon: "iconsminds-air-balloon-1",
    label: "menu.gogo",
    to: "/app/gogo",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.start",
        to: "/app/gogo/start"
      }
    ]
  },
  {
    id: "secondmenu",
    icon: "iconsminds-book",
    label: "menu.manager",
    to: "/app/manager",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.genres",
        to: "/app/manager/genres"
      },
      {
        icon: "iconsminds-film-video",
        label: "menu.movies",
        to: "/app/manager/movies"
      },
      {
        icon: "simple-icon-people",
        label: "menu.users",
        to: "/app/manager/users"
      },
    ]
  },
  {
    id: "blankpage",
    icon: "iconsminds-bucket",
    label: "menu.blank-page",
    to: "/app/blank-page"
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "https://gogo-react-docs.coloredstrategies.com/",
    newWindow: true
  }
];
export default data;
