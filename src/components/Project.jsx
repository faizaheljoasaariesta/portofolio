import { motion } from "framer-motion"
import { styles } from "../style"
import { textVariant } from "../utils/motion"
import AutonomusCanvas from "./canvas/Autonomus"
import AntennaCanvas from "./canvas/Antenna"
import { useEffect, useState } from "react"

const Project = () => {
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
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="w-full h-auto flex flex-col">
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] flex flex-col`}>
          <motion.div
            variants={textVariant()}
          >
            <p className={styles.sectionSubText}>
              project that is being worked on
            </p>
            <h2 className={styles.sectionHeadText}>
              Autonomous Vehicles.
            </h2>
          </motion.div>
          <div className="flex flex-col xs:flex-row justify-around xs:h-96 h-full">
            <div className="flex h-full w-full mt-10 xs:mt-0 justify-center items-center">
              <AutonomusCanvas />
            </div>
            <div className="flex flex-col h-full w-full justify-center items-baseline xs:p-10 p-0">
              <p className="text-secondary text-[17px] text-justify leading-[30px]"><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">The Autonomous Vehicles</span> project uses machine learning and computer vision technology to detect lanes and facing obesthecles. The use of Jetson is expected to be the main controller combined with the Arduino Mega microcontroller. Parameter control will be obtained through path image identification via the camera.</p>
              <div
                onClick={() => window.open("https://drive.google.com/file/d/1ZFdzVD_xTWiOBMKxkDX6dhtjyQbGwIOf/view?usp=sharing", "_blank")}
                className='py-2 button-primary w-full mt-10 text-center text-white cursor-pointer rounded-lg max-w-[200px]'
              >
                Learn more!
              </div>
            </div>
          </div>
        </div>

        {isMobile 
          ?
          <div className={`${styles.padding} bg-black-100 rounded-2xl min-h-[300px] flex flex-col`}>
            <motion.div
              variants={textVariant()}
            >
              <p className={`${styles.sectionSubText} text-right`}>
                project that is being worked on for Indonesian Aerospace (IAe)
              </p>
              <h2 className={`${styles.sectionHeadText} text-right`}>
                Automatic Tracking System for Antenna.
              </h2>
            </motion.div>
            <div className="flex flex-col xs:flex-row justify-around xs:h-96 h-full">
              <div className="flex h-full w-full mt-10 xs:mt-0 justify-center items-center">
                <AntennaCanvas />
              </div>
              <div className="flex flex-col h-full w-full justify-center items-baseline xs:p-10 p-0">
                <p className="text-secondary text-[17px] text-justify leading-[30px]"><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">The Automatic Tracking System for Antenna</span> developing an antenna tracking system for aircraft involved creating a reliable solution for monitoring and testing flight operations. This project focused on accurately tracking aircraft positions using real-time data from ADS-B devices. By converting raw ADS-B data into usable formats, I enabled seamless integration into the tracking system. Additionally, I designed a web-based dashboard for real-time monitoring, allowing operators to oversee the tracking process efficiently.</p>
                <div
                  onClick={() => window.open("https://drive.google.com/file/d/1ZFdzVD_xTWiOBMKxkDX6dhtjyQbGwIOf/view?usp=sharing", "_blank")}
                  className='py-2 button-primary w-full mt-10 text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                  Learn more!
                </div>
              </div>
            </div>
          </div>
          :
          <div className={`${styles.padding} bg-black-100 rounded-2xl min-h-[300px] flex flex-col`}>
            <motion.div
              variants={textVariant()}
            >
              <p className={`${styles.sectionSubText} text-right`}>
                project that is being worked on for Indonesian Aerospace (IAe)
              </p>
              <h2 className={`${styles.sectionHeadText} text-right`}>
                Automatic Tracking System for Antenna.
              </h2>
            </motion.div>
            <div className="flex flex-col xs:flex-row justify-around xs:h-96 h-full">
              <div className="flex flex-col h-full w-full justify-center items-baseline xs:p-10 p-0">
                <p className="text-secondary text-[17px] text-justify leading-[30px]"><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">The Automatic Tracking System for Antenna</span> developing an antenna tracking system for aircraft involved creating a reliable solution for monitoring and testing flight operations. This project focused on accurately tracking aircraft positions using real-time data from ADS-B devices. By converting raw ADS-B data into usable formats, I enabled seamless integration into the tracking system. Additionally, I designed a web-based dashboard for real-time monitoring, allowing operators to oversee the tracking process efficiently.</p>
                <div
                  onClick={() => window.open("https://drive.google.com/file/d/1ZFdzVD_xTWiOBMKxkDX6dhtjyQbGwIOf/view?usp=sharing", "_blank")}
                  className='py-2 button-primary w-full mt-10 text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                  Learn more!
                </div>
              </div>
              <div className="flex h-full w-full mt-10 xs:mt-0 justify-center items-center">
                <AntennaCanvas />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Project