import React,{useState} from 'react';
import { FaCheck } from "react-icons/fa";

import './Addcart.css';

import { NavLink } from 'react-router-dom';
import AddCarttoggle from './AddCartToggle';
import { useCartContext } from '../../context/CartContext';



const Addcart = ({product}) =>{

  const {addToCart} = useCartContext();

 const {id , colors , stock} = product;

 const [ color , setcolor] = useState(colors[0]);

 const [amount , setAmount ] = useState(1);


 const setDecrease = () =>{
    amount > 0 ? setAmount(amount - 1) : setAmount(0);
 }

 const setIncrease = () =>{

    amount < stock ? setAmount(amount + 1 ) : setAmount(stock);
 }


return (<>

  
   <div>

    <p className='flex justify-start items-center'>  
        color: 
        { colors.map((curColor, index)=>{
                return <button key={index} style={{background: curColor}} className={color === curColor ? "btnStyle active" : "btnStyle" }  onClick={()=>setcolor(curColor)}> {color === curColor ? <span className='text-white flex items-center justify-center scale-90'><FaCheck/></span>  : "" }</button>
            })
        }
    </p>
  </div> 


  <AddCarttoggle amount={amount} setDecrease={setDecrease} setIncrease ={setIncrease} />

<NavLink to='/cart'
onClick={()=>addToCart(id , amount , color , product)}>
  <button className='w-[6rem] h-[2rem] rounded-md bg-blue-600 text-white hover:border-[2px] hover:bg-white hover:text-blue-600 transition-all ease-out hover:border-blue-600'>Add to cart</button>
  </NavLink>  
    
    </>);

}
export default Addcart;