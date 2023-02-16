import "./assets/styles/app.scss";
import { Routes, Route, Navigate } from "react-router-dom";

import { routes } from "./routes";
import ScrollToTop from "./scrollToTop";
import { CssBaseline } from "@mui/material";

function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            // element={<RequireAuth>{route.component}</RequireAuth>} // This will be used in the future
            element={route.component}
            key={route.name}
          />
        );
      }

      return null;
    });

  return (
    <>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
