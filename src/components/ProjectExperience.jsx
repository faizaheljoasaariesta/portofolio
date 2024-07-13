/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { certificateIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { myProject } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../style';

const CertificateCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full duration-200'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='certificate_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={certificateIcon}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectExperience = () => {
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
    <div className="mt-4">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My List Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience List My Project.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {isMobile 
          ? 
          myProject.slice(0, 3).map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
          ))
          :
          myProject.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
          ))
        }
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectExperience, "certificate");