import { BrowserRouter } from "react-router-dom"

import {
  Hero,
  About,
  Experience,
  Navbar,
  Tech,
  Project,
  Footer,
} from "./components"

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-y-scroll overflow-x-hidden">
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Project />
        <Tech />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
