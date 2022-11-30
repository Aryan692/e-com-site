import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin , BsTwitter  } from "react-icons/bs";

import { FaDiscord } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () =>{

    return (<>

    <div className='main-div h-[45vh] w-full bg-[#000033] mt-[7rem] '>
     <div className='secondry-div flex items-center justify-center ml-[6rem] '>
        <div className='div1 flex flex-col  justify-center gap-3 w-[40vh] h-[30vh] '>
            <h1 className='h1 text-white'>E-commerce site</h1>
             <p className='para1 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className='div2 flex flex-col gap-3 w-[40vh] h-[30vh]  justify-center  items-center'>
           <span className='span text-white'> Follow us</span>
            <div className='div2-child flex gap-4 text-2xl text-white '>
         <a href="https://www.instagram.com/aryantiwari692/"> <span className=' icons cursor-pointer'><FiInstagram  /> </span></a> 
          <a href="https://www.linkedin.com/in/balram-tiwari-31139a24b"> <span className=' icons cursor-pointer'><BsLinkedin  /></span> </a>
          <a href="https://twitter.com/AryanTi64498572?t=kWt27Y4e03FeAhPXJoyUXw&s=09"> <span className=' icons cursor-pointer'><BsTwitter  /></span> </a>
           <span className=' icons cursor-pointer'><FaDiscord /> </span>
           </div>
            </div>
        
        <div className="div3 w-[40vh] flex flex-col text-white h-[30vh]   justify-center">
            <span>Contant Us</span>
            <a href="tel:1234567890">+91-1234567890</a>
        </div>
        </div>

        <div className='footer border-white h-[5vh] w-full border-[1px] border-r-0 border-l-0 border-b-0 mt-[2rem] flex items-center justify-center  gap-10'>
        <h1 className='text-white mt-[0.7rem]'>@{new Date().getFullYear()} Aryan. All rights reserved</h1>
        <span className='text-white mt-[1.6rem]'>Private Policy <br /> terms & condition</span>
        </div>
<div className='floating-div w-[51%] h-[12vh] flex bg-gray-100 mt-[-18rem] ml-[24%] rounded-md justify-between items-center p-6'>
    <span className="spany font-sans ">Ready to get started? <br /> talk to us today</span>

    <NavLink to="/contact">
    <button className='btn bg-blue-700 border-[2px] text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 w-[6rem] h-[2.5rem] rounded-md transition-all ease-in '>Get Started</button>
    </NavLink>
</div>
</div>

    
    </>);


}
 export default Footer;
