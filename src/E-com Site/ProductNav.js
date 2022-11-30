import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductNav =({title}) =>{

    return(<>

    <div className='div1 flex justify-start ml-[1rem] font-serif text-2xl'>
   
   <NavLink to="/"><span className='text-blue-500 hover:underline curson-pointer'>Home </span> </NavLink>/{title}
   
    </div>
    </>);


}
export default ProductNav;
