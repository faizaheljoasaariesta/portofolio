import { 
  ProjectExperience,
  ProjectExperienceHeader,
  Navbar,
  Project,
  Footer,
} from "../components"

const Projects = () => {
  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <Navbar />
      <ProjectExperienceHeader />
      <Project />
      <ProjectExperience />
      <Footer />
    </div>
  )
}

export default Projects