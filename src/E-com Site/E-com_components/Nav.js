import React from 'react';
import { BsCart2 } from "react-icons/bs";

import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ()=> {

    const {total_item } = useCartContext();

    const { loginWithRedirect , logout , isAuthenticated , user } = useAuth0();

    return (<>



<div className='flex'>

    <ul className='list hidden md:flex items-center gap-9'>
  

    <li><NavLink className=" hover:text-blue-700 md:inline-block hover:underline  " to="/">Home</NavLink></li>

    <li><NavLink className=" hover:text-blue-700 md:inline-block hover:underline " to="/About">About</NavLink></li>

    <li><NavLink className=" hover:text-blue-700 md:inline-block hover:underline " to="/Products">Product</NavLink></li>
   
    
        <li><NavLink className=" hover:text-blue-700 md:inline-block hover:underline " to="/Contact">Contact</NavLink></li>

{ isAuthenticated && <p className='text-[0.8rem] font-bold'>{user.name}</p>}

        {isAuthenticated?  <li>
        <button  className='w-[5rem] h-[2.2rem] shadow-2xl bg-blue-700 rounded-md  hover:border-[2px] hover:border-blue-600 hover:text-blue-600  hover:bg-white cursor-pointer text-white transition-all ease-in' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </li> :  <li>
        <button  className='w-[5rem] h-[2.2rem] shadow-2xl bg-blue-700 rounded-md  hover:border-[2px] hover:border-blue-600 hover:text-blue-600  hover:bg-white cursor-pointer text-white transition-all ease-in' onClick={() => loginWithRedirect()}>Log In</button>
        </li> }

        <li className='list mr-[17px] hover:text-blue-700 md:inline-block text-[1.7rem]'><NavLink to="/Cart"><BsCart2 /></NavLink></li>
        <div className='cart-count w-[1.4rem] h-[1.4rem] rounded-full bg-blue-600 text-black flex items-center justify-center absolute right-[0.5%] top-[2.6%]'>{total_item}</div>
    </ul>
   

</div>


    </>);

} 
export default Nav;
