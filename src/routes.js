import Home from "./pages/home/Home";
import ProjectDetails from "./pages/projects/ProjectDetails";

export const routes = [
  {
    name: "home",
    route: "/",
    alias: "Início",
    component: <Home />,
  },
  {
    name: "projects",
    alias: "Projetos",
    collapse: [
      {
        name: "home",
        route: "projeto/:id",
        alias: "Detalhe",
        component: <ProjectDetails />,
      },
    ]
  },
  // {
  //   name: "sobre",
  //   route: "sobre",
  //   alias: "Sobre",
  //   // icon: <DashboardCustomize />,
  //   component: <Home />,
  // },
];
