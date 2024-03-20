import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../style"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  // eslint-disable-next-line react/prop-types
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full duration-200">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            // eslint-disable-next-line react/no-unknown-property
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>

        </motion.div>
      </Tilt>
    )
  }

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] text-justify leading-[30px]"
      >
        As a mid-semester student at Universitas Gadjah Mada, Department of Electrical Engineering and Informatics, I bring a diverse skill set to the table. My expertise spans across full-stack web development, IoT system development, DevOps practices, and instrumentation control. With a keen interest and aptitude in website development, I am particularly drawn to architecting microservices-based applications. Currently, I leverage React.js and Next.js frameworks to craft scalable and efficient web solutions. In terms of databases, I am proficient in utilizing various platforms including Google Cloud, AWS, MySQL, MongoDB, and Vercel Postgres. This versatility allows me to adapt to different project requirements and optimize database performance. Throughout my academic journey and practical experiences, I have honed my abilities to seamlessly integrate frontend and backend technologies, ensuring cohesive and robust web applications. My passion for innovation and problem-solving drives me to continuously explore emerging technologies and refine my skills as a developer.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "About")