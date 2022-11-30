import React from 'react';
import {useFilterContext} from '../../context/FilterContext'
import FormatPrice from '../../Helpers/Formatprice';

const Filter =()=>{

// const {filters: {text , color , minPrice , price , maxPrice} , updateFilterValue , all_products , clearFilters } = useFilterContext();
const {filters: {text , minPrice , price , maxPrice} , updateFilterValue , all_products , clearFilters } = useFilterContext();


const getUniqueData = (data , property ) =>{

    let newVal = data.map((curElem)=>{
return curElem[property];
    })
if(property === "colors"){
    newVal = newVal.flat();
}
else{
    
    return (newVal = ["all", ...new Set(newVal)]);
}

}

const categoryData = getUniqueData(all_products , "category")
const companyData = getUniqueData(all_products , "company")
// const colorsData = getUniqueData(all_products , "colors")
 

    return (<>

   <div>
    <form onSubmit={(e)=> e.preventDefault()}>
        <input className='border-[2px] bg-gray-100 mt-[0.5rem] ml-[1rem]' type="text" name='text' value={text} onChange={updateFilterValue} placeholder="search" />
    </form>
   </div>
    

    <div className='filter-category flex flex-col items-center justify-center gap-2'>
        <h3 className='font-semibold '>Category</h3>

        <div className='flex flex-col gap-2 '>{
            categoryData.map((curElem , index)=>{
                return <button className='hover:text-blue-500' key={index} type='button' name="category" value={curElem} onClick={updateFilterValue}>
                    {curElem}
                </button>

            })
}</div>


    </div>

    <div className='flex mt-5 flex-col items-center justify-center'>
        <h3 className='font-semibold'>Company</h3>
        <form action="#">
            <select className='w-[4rem]' name="company" id="company" onClick={updateFilterValue}>
                {companyData.map((curElem , index)=>{
                    return ( <option value={curElem} key={index} name="company">{curElem}</option>)
                })}
            </select>
        </form>
    </div>

    {/* { <div className='filter_colors'>
        <h3>Colors</h3>
       
       <div className='colors'>
        {colorsData.map((curColor , index) => {
        return( <button key={index} type="button" value={curColor} name="color" className={`bg-${curColor}`} onClick={updateFilterValue}>
            {color === curColor ? "" : null}
         </button>  )
       })}
       </div>
       
    </div> } */}

    <div className='flex flex-col gap-3 items-center justify-center mt-4'>
        <h3 className='font-semibold'>Price</h3>

        <p><FormatPrice price={price}/></p>
        <div>
            <input type="range" min={minPrice} max={maxPrice} value={price} name="price" onChange={updateFilterValue} />
        </div>
    </div>

    <div className='flex items-center justify-center mt-2'>
        <button className='w-[7rem] h-[2.5rem] rounded-md bg-red-500 text-white' onClick={clearFilters}>Clear filter</button>
    </div>
    </>);
}

export default Filter;