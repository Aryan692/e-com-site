import React from 'react';
import { NavLink } from 'react-router-dom';

const Herosection = ({myData}) => {

    const {name} = myData;

    return (<>

    
<div className='home-main h-[80vh] w-full flex lg:flex-row flex-col justify-between'>

<div className='div1 h-[90%] w-[53%] flex flex-col  justify-center gap-1 ml-[7rem] mt-[2rem]'>
    <span className='spani lg:text-3xl ml-[10px] font-sans'>Welcome to</span>
    <h1 className='h1 text-4xl lg:text-6xl text-black font-sans font-bold mb-[10px]'>{name}</h1>
    <div className='flex justify-center items-center'>
    <p className='para text-gray-500 font-mono flex items-center justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fugit velit perferendis reprehenderit molestiae cumque .</p></div>
<div>
    <NavLink to="/Shop" >
    <button className='btn w-[6rem] h-[2.5rem] shadow-2xl bg-blue-700 rounded-lg mt-[1rem] hover:border-[2px] hover:border-blue-600 hover:text-blue-600  hover:bg-white cursor-pointer text-white transition-all ease-in'>Shop now</button>
    </NavLink>
    </div>
</div>
<div className='div h-[90%] w-[60%] mt-[3rem]'>
    <img className='image w-[30rem] h-[14rem] md:h-[20rem] mt-[2rem] lg:mt-[3rem] relative scale-90 ml-[4rem] lg:ml-0  shadow-2xl' src="https://github.com/thapatechnical/thapareactecom/blob/main/public/images/hero.jpg?raw=true" alt="hero" />
    <div className='span2 absolute z-[-1] lg:left-[64%]  lg:top-[25%] left-[17%] scale-75 lg:scale-100 top-[55%] bg-purple-300 h-[18rem] w-[18rem] md:w-[20rem]'></div>


    
</div>
</div>
    


    
    </>);
}

 export default Herosection;