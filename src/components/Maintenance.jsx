/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react';
import { SectionWrapper } from '../hoc';

import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariant } from "../utils/motion";

import Lottie from 'react-lottie';
import animationData from '../assets/lottie/maintenance.json';

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
    <div className="mb-10">
      <Lottie
        options={defaultOptions}
        height={isMobile ? 200 : 400}
        width={isMobile ? 300 : 600}
      />
    </div>
  )
}

const Maintenance = () => {
  return (
    <div className='flex flex-col h-screen justify-center'>
      <LottieAnimation />

      <motion.div variants={textVariant()} className='flex flex-col justify-center text-center'>
        <p className={`${styles.sectionSubText} `}>Sorry for the inconvenience</p>
        <h2 className={`${styles.sectionHeadText}`}>Under maintenance.</h2>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Maintenance, "");