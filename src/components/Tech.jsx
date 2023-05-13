import React from "react";
import  { motion } from 'framer-motion';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components"

const Tech = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>

    {/* //Pause for now */}
{/* 
    <div>
      <StarsCanvas></StarsCanvas>
    </div> */}
    
    {/* <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        // className='relative z-0'
      >
        <StarsCanvas />
      </motion.div> */}


    </>

    
  );
};

export default SectionWrapper(Tech, "");
