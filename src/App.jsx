import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Old from "./components/old/Old";

import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ProjectDetails from "./pages/projects/ProjectDetails";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="/old" element={<Old />} />
            <Route path="/projetos">
              <Route path=":id" element={<ProjectDetails />} />
            </Route>
            <Route path="/sobre" element={<About  />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
