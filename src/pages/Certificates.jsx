import { 
  Certificate,
  Navbar,
  Footer,
} from "../components"

const Certificates = () => {
  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <Certificate />
      <Footer />
    </div>
  )
}

export default Certificates
