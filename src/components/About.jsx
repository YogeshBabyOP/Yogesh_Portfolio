import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className = {`${styles.sectionSubText }  select-none` } > Introduction </p>
        <h2 className = {`${styles.sectionHeadText} select-none` } > Overview. </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='select-none mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]'
      >
        I'm a forever student software developer who loves to build projects with javascript, typescript
        and frameworks like React .js, Node .js, and three .js and I had interest to contribute to open source projects.
        {/* <a href="https://www.google.com">google</a> */}
        &nbsp; Let's work together to bring your ideas to life!
      </motion.p>


      <div className='select-none mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div>
      <div>
      {/* <StarsCanvas></StarsCanvas> */}
    </div>
      </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");
