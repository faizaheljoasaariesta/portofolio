/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { techVideo } from "../assets"

import { motion } from "framer-motion"

import { styles } from "../style"
import { fadeIn, textVariant } from "../utils/motion"

const Tech = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-32">
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>What technology is used</p>
          <h2 className={styles.sectionHeadText}>Skills Expertise.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-justify leading-[30px]"
        >
          This portfolio is a manifestation of my journey in developing skills in web development. Utilizing HTML, CSS, and JavaScript as the foundation, I am able to create visually appealing and responsive layouts. My understanding of TypeScript allows me to develop safer and more maintainable code. In my experience with React.js, Redux, and Tailwind CSS, I have deepened my abilities in managing application state and designing dynamic interfaces. Implementing Node.js enables me to build robust and flexible backends, which can be integrated with various services like MongoDB for database management and Firebase for real-time data storage. Throughout the development process, I gained experience in collaborating using Git for code management within teams. I am also proficient in designing prototypes using Figma and building and deploying applications using Docker. Currently, I am delving deeper into development with Next.js, a React framework that allows for the creation of highly optimized web applications in terms of SEO and performance. With this experience, I am determined to continue improving the quality and reliability of the products I produce.
        </motion.p>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technologies) => (
        <div className="w-28 h-28" key={technologies.name}>
          <BallCanvas icon={technologies.icon} />
        </div>
        ))}
      </div>

      <video 
        className="w-full h-auto"
        preload="false"
        playsInline
        loop
        muted
        autoPlay
        src={techVideo}
      />
    </div>
  )
}

export default SectionWrapper(Tech, "Skills")