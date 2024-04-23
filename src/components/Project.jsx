import { motion } from "framer-motion"
import { styles } from "../style"
import { textVariant } from "../utils/motion"
import AutonomusCanvas from "./canvas/Autonomus"

const Project = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] flex flex-col`}>
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>
            project that is being worked on
          </p>
          <h2 className={styles.sectionHeadText}>
            Autonomous Vehicles
          </h2>
        </motion.div>
        <div className="flex flex-col xs:flex-row justify-around xs:h-96 h-full">
          <div className="flex h-full w-full mt-10 xs:mt-0 justify-center items-center">
            <AutonomusCanvas />
          </div>
          <div className="flex flex-col h-full w-full justify-center items-baseline xs:p-10 p-0">
            <p className="text-secondary text-[17px] text-justify leading-[30px]"><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">The Autonomous Vehicles</span> project uses machine learning and computer vision technology to detect lanes and facing obesthecles. The use of Jetson is expected to be the main controller combined with the Arduino Mega microcontroller. Parameter control will be obtained through path image identification via the camera.</p>
            <a className="py-2 button-primary w-full mt-10 text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              Learn more!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project