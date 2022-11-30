import React from 'react';
import FormatPrice from '../../Helpers/Formatprice';
import AddCarttoggle from './AddCartToggle';
import { AiOutlineDelete } from "react-icons/ai";

import { useCartContext } from '../../context/CartContext';



const CartItem = ({id , image , amount , color , price  , name})=>{

 const {removeItem , setIncrease , setDecrease } = useCartContext();




    return (<>



    <div className='grid grid-cols-5 mt-[1rem]'>
        <div className='flex gap-2'>
            <img className='w-[5rem] h-[3rem]' src={image} alt={id} />
        
        <div>{name}
        <span className='flex items-center gap-2'>
        <p>color:</p>
        <div className='w-[1rem] h-[1rem] rounded-full' style={{backgroundColor:color , color:color}}></div>
        </span>
        </div>
        </div>


        <div> <p><FormatPrice price={price}/> </p></div>

        <div><AddCarttoggle
         amount={amount} 
         setDecrease={()=>setDecrease(id)}
         setIncrease ={()=>setIncrease(id)} />
         </div>

         <div>
            <FormatPrice price ={price * amount} />
         </div>

         <div><AiOutlineDelete className='text-red-500 text-2xl' onClick={()=>removeItem(id)}  /></div>
    </div>
    </>);
}

export default CartItem;