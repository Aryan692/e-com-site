import React from 'react';
import { useCartContext } from '../context/CartContext';
import CartItem from './E-com_components/CartItem';
import { NavLink } from 'react-router-dom';
import { BsCartX } from "react-icons/bs";
import { ImArrowRight} from "react-icons/im";
import FormatPrice from '../Helpers/Formatprice';


const Cart = () => {

    const {cart , clearCart , total_price , shipping_fee} = useCartContext();
    

    if(cart.length === 0){
        return(<>
      
        
         <div className='flex items-center justify-center gap-2 mt-[3rem]'>
            <h1 className='text-blue-600 text-3xl font-mono'>Your cart is empty</h1>
            <p className='text-5xl'><BsCartX/></p>
        </div>
<div className='flex justify-center items-center mt-5 gap-2'>
    <p className='text-2xl'><ImArrowRight /></p>
    <p className='text-2xl'><ImArrowRight /></p>
    <p className='text-2xl'><ImArrowRight /></p>
        <NavLink to="/Products"> <button className='w-[10rem] h-[3rem] rounded-md bg-blue-600 text-white flex items-center justify-center hover:border-blue-600  hover:border-[2px] hover:bg-white hover:text-blue-600 transition-all ease-out'>Continue Shopping</button>
              </NavLink> 
              </div>
        </> )
    }

    return (<>
    <div className='cartProduct ml-[7rem] mt-5 '>

        <div className='grid grid-cols-5 '>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>

        </div>
            <hr className='w-[85%] border-[2px] mt-[1rem]' />

            <div>
                {
                    cart.map((curElem)=>{
                        return <CartItem key={curElem.id} {...curElem} />
                    })
                }
            </div>

            <hr className='w-[85%] border-[2px] mt-[1rem]' />

            <div className='flex justify-between mt-[2rem] w-[86%]'>
              <NavLink to="/Products"> <button className='w-[10rem] h-[3rem] rounded-md bg-blue-600 text-white flex items-center justify-center hover:border-blue-600  hover:border-[2px] hover:bg-white hover:text-blue-600 transition-all ease-out'>Continue Shopping</button>
              </NavLink> 
                <button className='w-[7rem] h-[3rem] rounded-md bg-red-600 text-white flex items-center justify-center hover:border-red-600 hover:border-[2px]  hover:bg-white hover:text-red-600 transition-all ease-out' onClick={clearCart}>Clear Cart</button>
            </div>

            <div className='flex flex-col gap-1 bg-gray-100 w-[40vh] h-[30vh] relative left-[65%] mt-[2rem] rounded-lg'>
   <div className='flex gap-2 mt-[1rem] ml-[1rem]'>
   <p> Subtotal :</p>
   <p> <FormatPrice price={total_price} /></p>
   </div>
<div className='flex gap-2 mt-[1rem] ml-[1rem]'>
<p> Shipping Fee : </p>
<p><FormatPrice price ={shipping_fee} /></p>
</div>

<hr  className='w-[87%] ml-[1rem] mt-[1rem] border-black'/>
<div className='flex gap-2 mt-[1rem] ml-[1rem]'>
<p>
Total Order: 
</p>
<p><FormatPrice price={total_price + shipping_fee} /></p>
</div>
            </div>
            
    </div>
    </>);
}


export default Cart;