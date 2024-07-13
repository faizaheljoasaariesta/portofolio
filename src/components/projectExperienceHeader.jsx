/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import Lottie from 'react-lottie';
import animationData from '../assets/lottie/project.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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
    <div className="mb-5">
      <Lottie
        options={defaultOptions}
        height={isMobile ? 200 : 400}
        width={isMobile ? 300 : 600}
      />
    </div>
  )
}

const ProjectExperienceHeader = () => {

  return (
    <div className="mt-4">
      <LottieAnimation />

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] text-justify leading-[30px]'
        >
          Throughout my career, I have gained valuable experience in various technology projects, including web development, mobile app development, and IoT instrumentation and control. As a Full-Stack Developer Intern, I led the design, development, and implementation of graphic communication materials, creating responsive designs across all devices and ensuring quality and accuracy in all graphic materials. As a Front-End Developer Freelance, I updated the company profiles appearance and provided ease of use in website creation technology, contributing to the companys market target by collaborating on professional company profiles. In my role as a Consultant and Software Engineer Outsourcing, I built professional company profile websites for startups and collaborated to assist MSMEs and startup actors in developing their online presence. Additionally, I optimized websites for various devices, designed layouts that matched organizational identity, and tailored services to meet specific needs, enhancing user experience and engagement. As a Mobile Developer React-Native Freelance, I developed and maintained cross-platform mobile applications using React Native, collaborated with design teams to implement UI/UX designs, and integrated third-party APIs to enhance app functionality. Currently, as a Flight and Aircraft Test Intern, I upgraded an automatic tracking system for antenna towers, converted raw ADS-B data into JSON format, developed a web-based dashboard for real-time monitoring and control, and implemented precise control mechanisms using microcontrollers, ensuring system reliability and accuracy through thorough testing and validation.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectExperienceHeader, "");