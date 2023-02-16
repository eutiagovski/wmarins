import MaterialLayout from "./layouts/material/MaterialLayout";
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
    name: "home",
    route: "home",
    alias: "Início",
    component: <MaterialLayout />,
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
