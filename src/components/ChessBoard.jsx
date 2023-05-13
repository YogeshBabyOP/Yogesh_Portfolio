import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { ChessCanvas } from './canvas';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";
import { github } from "../assets";
import { projects } from "../constants";
import { chessservices } from "../constants";


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
          className='w-32 h-32'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ChessOP = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className = {`${styles.sectionSubText }  select-none` } > The Queen's Gambit </p>
        <h2 className = {`${styles.sectionHeadText} select-none` } > Attack Like Beth Harmon. </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='select-none mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]'
      >
        These are some of my favourite classical openings and aggressive defence in the chess world.
        &nbsp; Btw Magnus Carlsen! also loves to play london system.
      </motion.p>

      <div className='select-none mt-20 flex flex-wrap gap-10'>
        {chessservices.map((chessservices, index) => (
          <ServiceCard key={chessservices.title} index={index} {...chessservices} />
        ))}
      </div>

      <div>
          <br />
          
          <div class="mt-4 w-82 h-96">
              <ChessCanvas />
          </div>

      </div>
  </>
  );
};

export default SectionWrapper(ChessOP, "chess");
