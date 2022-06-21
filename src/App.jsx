import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import ProjectDetails from "./pages/projects/ProjectDetails";
import About from "./pages/about/About";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" exact>
            <Route path="" element={<Home />} />
            <Route path="projetos" exact>
              <Route path=":id" element={<ProjectDetails />} />
            </Route>
            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
