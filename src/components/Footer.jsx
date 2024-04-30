/* eslint-disable react/prop-types */
import { logo } from "../assets"
import { styles } from "../style"
import { socials } from '../constants'
import { useEffect, useState } from "react";

const Map = ({ isMobile }) => {
  return (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.70384045102!2d110.35957158320616!3d-7.805013386129935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57dbf97b4221%3A0x4242c4b75534afd5!2sAsrama%20Putra%20Bright%20Scholarship%207-8%20Yogyakarta!5e0!3m2!1sen!2sid!4v1713863496596!5m2!1sen!2sid&theme=dark"
      allowFullScreen
      width={isMobile ? '100%' : '400px'}
      height="100%"
      loading="lazy"
      style={{ filter: 'invert(100%)' }}
    />
  );
};


const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

  return (
    <div className="flex flex-col">
      <div className={`${styles.padding} flex flex-col xs:flex-row w-full bg-tertiary h-full gap-20`}>
        <div className="flex flex-col w-auto gap-10">
          <div className="flex items-center gap-4">
            <img 
              src={logo}
              alt="navLogo" 
              className="w-12 h-12 object-contain" 
            />
            <h1 className={styles.sectionSubText}>Faizahel Joasa Ariesta</h1>
          </div>
          <p>Connect now, to make your work and relationships easier with us in contributing to building professional projects. You can get projects related to the Internet of Things, Machine Learning, and Website.</p>
          <div className="flex flex-row gap-5">
            {socials.map((socials) => (
              <a href={socials.link} key={socials.name}>
                <img 
                  src={socials.src}
                  alt={socials.name}
                  key={socials.name}
                  width={30}
                  height={30}
                  className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-2 w-auto gap-10">
          <h1 className={styles.sectionSubText}>Link</h1>
          <div className="flex flex-col gap-5 items-start">
            <a href="#">Home</a>
            <a href="#About">About</a>
            <a href="#Experience">Experiance</a>
            <a href="#Skills">Skills</a>
          </div>
        </div>

        <div className="flex flex-col mt-2 w-auto gap-10">
          <h1 className={styles.sectionSubText}>Location</h1>
          <div className="flex flex-col gap-5">
            <p>Asrama Putra <br /> Bright Scholarship Batch 7 & 8 <br /> Yogyakarta Indonesia</p>
            <p>faizaheljoasaariesta@gmail.com</p>
            <p>+62 821-2715-7135</p>
          </div>
        </div>
        <div>
          <Map isMobile={isMobile}/>
        </div>
      </div>

      <div className={`${styles.padding} flex flex-col w-full bg-tertiary justify-center items-center gap-5`}>
        <div className="w-full border-t border-white"></div>
        <p className="text-center">@Copyright <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Faizahel Joasa Ariesta</span> - 2024 All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer