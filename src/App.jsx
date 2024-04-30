import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Certificates from "./pages/Certificates"
import Maintenance from "./pages/Maintenance"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portofolio" element={<Home />} />
        <Route path="/portofolio/certificate" element={<Certificates />} />
        <Route path="/portofolio/maintenance" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
