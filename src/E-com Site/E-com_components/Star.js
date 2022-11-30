import React from 'react';

import {AiFillStar} from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FiStar } from "react-icons/fi";

const Star = ({stars , reviews}) =>{



 const ratingStar =   Array.from(({length:5}),(elem , index)=>{

    let number = index +0.5;
    return(<>

    {
        stars >= index + 1 ? <AiFillStar /> : stars >= number ?  <BsStarHalf /> : <FiStar />
    }
    
    </>)
 })


    return (<>

<div className='flex gap-2'>

   <span className='flex gap-2 text-2xl text-yellow-400'>{ratingStar}</span> 

    <p className='text-blue-600'>({reviews} customer reviews)</p>
</div>

    
    </>);


}
export default Star;