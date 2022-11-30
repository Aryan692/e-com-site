import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine} from "react-icons/ri";

const Services = () => {

    return (<>

    <div className='main-div mt-[6rem] md:mt-0 md:h-[55vh] w-full md:border-[1px]  flex flex-col md:flex-row items-center justify-center  md:gap-4'>

        <div className='sec-div  h-[30vh] w-[33vh] md:h-[45vh] md:w-[45vh] rounded-lg border-[2px] flex flex-col gap-3 bg-gray-100 items-center justify-center'>
          <div className='icon  w-[3rem] h-[3rem] rounded-full bg-white flex items-center justify-center'><TbTruckDelivery  className='truck w-[2rem] h-[2rem] text-blue-600'/></div>
           <p className='para font-mono text-1xl'>Super fast and free dilivery</p></div>
        <div className='sec-div h-[30vh] w-[30vh] md:h-[45vh] md:w-[45vh] rounded-lg flex flex-col gap-8 items-center justify-center'>
            <div className='third-div mt-3 md:mt-0 scale-90 md:scale-100 h-[13vh] w-[42vh] rounded-md bg-gray-100 flex items-center gap-5'>
                <div className='icon  w-[3rem] h-[3rem] rounded-full bg-white flex items-center justify-center ml-[8px]'><MdSecurity className="security w-[2rem] h-[2rem] text-blue-600"/></div>
                <p className='para font-mono text-1xl'>non-contacting shipping</p>
                 </div>
        
            <div className='third-div mb-3 md:mb-0 scale-90 md:scale-100 h-[13vh] w-[42vh] rounded-md bg-gray-100 flex items-center gap-5'>
                <div className='icon  w-[3rem] h-[3rem] rounded-full bg-white flex items-center justify-center ml-[8px]'><GiReceiveMoney className="money-receive w-[2rem] h-[2rem] text-blue-600"/></div>
                <p className='para font-mono text-1xl'>Money-back Gauranteed </p>
            </div>
        
        </div>
        <div className='sec-div h-[30vh] w-[33vh] md:h-[45vh] md:w-[45vh]  rounded-lg border-[2px] bg-gray-100 flex flex-col items-center justify-center'>
            <div className='icon  w-[3rem] h-[3rem] rounded-full bg-white flex items-center justify-center'><RiSecurePaymentLine className =" payment w-[2rem] h-[2rem] text-blue-600" /></div>
            <p className='para font-mono text-1xl'>Super secure payment services</p>
        </div>
    </div>
    </>);
}

export default Services;