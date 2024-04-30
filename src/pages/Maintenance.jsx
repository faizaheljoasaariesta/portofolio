import { 
  Maintenance,
  Navbar,
} from "../components"

const Maintenances = () => {
  return (
    <div className="relative z-0 bg-primary overflow-y-scroll overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <Maintenance />
    </div>
  )
}

export default Maintenances