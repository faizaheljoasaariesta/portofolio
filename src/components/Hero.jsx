import { blackHole } from "../assets"
import HeroContent from "./sub/HeroContent"

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-screen mx-auto">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-260px] sm:top-[-395px] left-0 z-[0] w-full h-full object-cover"
      >
        <source src={blackHole} type="video/webm"/>
      </video>

      <HeroContent />
    </div>
  )
}

export default Hero