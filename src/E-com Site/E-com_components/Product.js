import React from 'react';
import { NavLink } from 'react-router-dom';

import FormatPrice from '../../Helpers/Formatprice';

const Product = (curElem) =>{

    const {id, image, price, category, name} = curElem;

    return (<>

    <NavLink to={`/SinglePage/${id}`}>

        <div className='cards border-[1px] bg-white rounded-lg p-2 mb-[3rem]'>
           
            <figure> <img src={image} alt={name} className="w-[18rem] h-[12rem] "/>
            
          <figcaption className='caption font-sans font-semibold'> {category} </figcaption>
            </figure>
          

            <div className='flex gap-3 font-sans font-semibold'>
                <h1>{name}</h1>
                <p>{<FormatPrice price={price}/>}</p>
            </div>

        </div>
        

    </NavLink>
    
    </>)
}

export default Product;