import React from "react";
import { SectionWrapper } from "../hoc";
import { leetcode, gitpull, twitter, github, linkedin } from "../assets";


const Feedbacks = () => {
  return (
    <>
        <div
              className='select-none ms-12 grid grid-cols-5 gap-9 place-content-center h-18'
        >

            <img src={leetcode} alt="" width={77} height={100}
              className="cursor-pointer"
              onClick={() => {
                // window.alert("op");
                window.open("https://leetcode.com/yogeshop2003", "_blank");
              }}
              
            />

            <img src={github} alt="" width={90} height={100}
              className="cursor-pointer"
              onClick={() => window.open("https://github.com/yogeshbabyop","_blank")}
            />

            <img src={twitter} alt="" width={100} height={100}
              className="cursor-pointer"
              onClick={() => window.open("https://twitter.com/yogeshbabyop","_blank")}
            />

            <img src={linkedin} alt="" width={90} height={100}
              className="cursor-pointer"
              onClick={() => window.open("https://stackoverflow.com/users/21155582/yogesh-tumma","_blank")}
            />

             <img className="mt-3 cursor-pointer" src={gitpull} alt="" width={70} height={100} 
              onClick={() => window.open("https://www.instagram.com/tummayogesh/","_blank")}
            />  
        
        </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
