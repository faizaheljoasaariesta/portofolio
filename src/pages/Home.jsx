import {
  Hero,
  About,
  Experience,
  Navbar,
  Tech,
  Project,
  Footer,
  Works,
  Feedback,
} from "../components"

const Home = () => {
  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Project />
      <Works />
      <Feedback />
      <Tech />
      <Footer />
    </div>
  )
}

export default Home
