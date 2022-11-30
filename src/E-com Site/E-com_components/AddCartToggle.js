import React from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";

const AddCarttoggle = ({amount , setDecrease , setIncrease})=>{

    return(<>

    <div className=' mt-3'>
        <div className='flex gap-4  items-center'>
            <button  onClick={()=>{setDecrease()}}><BiMinus /></button> 
            <span className='font-semibold'>{amount}</span>
            <button onClick={()=>{setIncrease()}}><BiPlus /></button> 
        </div>
    </div>
    
    </>);
}
export default AddCarttoggle;