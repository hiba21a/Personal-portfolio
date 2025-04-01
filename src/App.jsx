
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop ";

function App() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<Home />} />
        <Route path="/education" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/projects/:id/:name" element={<ProjectDetails />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;

