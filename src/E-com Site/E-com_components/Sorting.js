import React from 'react';
import { BsGridFill, BsListTask } from "react-icons/bs"; 
import { useFilterContext } from '../../context/FilterContext';


const Sorting = () =>{

    const { filter_products , setGridView , setListView , sorting} = useFilterContext();
    return (<>
    
<div className='flex items-center justify-between mt-2 mb-3'>
    <div className='flex gap-2'> <button onClick={setGridView}><BsGridFill className='text-2xl'/></button>
          <button onClick={setListView}><BsListTask className='text-2xl'/></button> </div>

<div><span className='font-semibold'>{filter_products.length} </span>products available</div>

<div className='sort'>

    <form action="#">
        <label htmlFor="sort">
            <select name="sort" id="sort" className='bg-gray-200 rounded-md h-[2rem]  px-2w-[8rem]' onClick={sorting} >
                <option value="lowest">Price(lowest)</option>
                <option value="highest">Price(highest)</option>
                <option value="a-z">Price(A-Z)</option>
                <option value="z-a">Price(Z-A)</option>
            </select>
        </label>
    </form>
    
</div>

          </div>
    </>);
}

export default Sorting;