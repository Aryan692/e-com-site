import React from 'react';
// import { AppContext } from '../../context/Contextapi';
import { useProductContext } from '../../context/Contextapi';

import Product from './Product';



const FeatureProducts =() =>{

    const { isLoading , featureProducts} = useProductContext();
    // const [isLoading , featureProducts] = useContext(AppContext);

    console.log(featureProducts);
    if(isLoading){
        return <div>Loading....</div>
    }

    return (<>
    <div className='section-div mt-[10rem] md:mt-0 md:h-[70vh] bg-gray-50 max-w-full flex flex-col justify-center items-center'>
        <div className='div1 flex flex-col font-bold text-3xl mt-[2rem]'>
            <span>Check now!</span>
            <span>Our feature services</span>
        </div>
<div className='div2 md:h-[50rem] w-[57rem] mt-[8rem] md:mt-[2rem] justify-center items-center gap-3 md:gap-8 flex md:flex-row flex-col'>
    {
    featureProducts.map((curElem)=>{
           return( <> <span>
           <Product key={curElem.id} {...curElem} />
           </span>
           
           </>)
    })
    }
</div>

    </div>


    </>);
}
export default FeatureProducts;