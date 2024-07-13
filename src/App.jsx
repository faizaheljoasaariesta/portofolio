import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Certificates from "./pages/Certificates"
import Maintenance from "./pages/Maintenance"
import Contact from "./pages/Contact"
import Project from "./pages/Project"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portofolio" element={<Home />} />
        <Route path="/portofolio/contact" element={<Contact />} />
        <Route path="/portofolio/certificate" element={<Certificates />} />
        <Route path="/portofolio/maintenance" element={<Maintenance />} />
        <Route path="/portofolio/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
