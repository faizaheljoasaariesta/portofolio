import { motion } from "framer-motion"
import { styles } from "../style"
import { textVariant } from "../utils/motion"

const Project = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
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

      </div>

    </div>
  )
}

export default Project