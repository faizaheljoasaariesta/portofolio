import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { styles } from '../../style'
import { TypeAnimation } from 'react-type-animation'
import { mainIconsDark } from '../../assets'
import { String } from '../canvas'

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`${styles.paddingX} flex flex-row items-center justify-center w-full mt-40 z-[20]`}
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="welcome-box py-[10px] px-[12px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[12px] sm:text-[13px] flex">
            <span className="hidden sm:block">Faizahel Joasa Ariesta - &nbsp;</span> 
            Developer Portofolio
          </h1>
        </div>

        <div className="flex flex-col gap-6 mt-6 text-3xl sm:text-6xl font-bold text-white w-auto h-auto">
          <span>
            Providing 
            <br />
              <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"> 
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    1000,
                    'IoT Developer',
                    1000,
                    'DevOps Engineer',
                    1000,
                    'Instrumentation',
                    1000,
                    'Control Engineer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </span>
            <br />
            Project Experiance
          </span>
        </div>

        <p className="text-xs sm:text-lg text-gray-400 my-5 max-w-[600px]">
          I&apos;m a Full-Stack Software and Instrumentation Control Engineer. With experiance in Website Development, Programmable Logic Controller, Internet of Things System, and Microcontroller,  Check out my skill. 
        </p>

        <a className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Checkout Now!
        </a>
      </div>

      <div className="w-full h-full hidden sm:flex justify-center items-center">
        <String />

        <div>
          <img 
            src={mainIconsDark}
            alt="Icon worker developer"
            height={650}
            width={650}
          />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
        <a href="#About">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary hover:border-white transition duration-300 ease-in-out flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </motion.div>
  )
}

export default HeroContent
