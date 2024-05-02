import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Certificates from "./pages/Certificates"
import Maintenance from "./pages/Maintenance"
import Contact from "./pages/Contact"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portofolio" element={<Home />} />
        <Route path="/portofolio/contact" element={<Contact />} />
        <Route path="/portofolio/certificate" element={<Certificates />} />
        <Route path="/portofolio/maintenance" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
