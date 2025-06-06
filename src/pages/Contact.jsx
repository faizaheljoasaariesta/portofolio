import { 
  Contact,
  Navbar,
  Footer,
  StarsCanvas
} from "../components"

const Contacts = () => {
  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <Navbar />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Contacts
