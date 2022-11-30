import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/Contextapi';
import ProductNav from './ProductNav';
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

import { MdSecurity } from "react-icons/md";
import FormatPrice from '../Helpers/Formatprice';
import Myimages from './Myimages';
import Star from './E-com_components/Star';
import Addcart from './E-com_components/Addcart';

const API ="https://api.pujakaitem.com/api/products"



const SinglePage = () => {

    const {getSingleProduct , isSingleLoading, singleProduct} = useProductContext();

    console.log(singleProduct);
    const {id} = useParams();


    const { id:ilias, name , image, company, price , description,  stock , stars , reviews } = singleProduct;


    useEffect(() => {
      
    getSingleProduct(`${API}?id=${id}`);
     
    }, [])

    if(isSingleLoading){
        return <div>Loading....</div>
    }
    

    return(<>
    
     <div>
    
    <ProductNav  title ={name} />

    <div className='md:grid grid-cols-2 mt-[3rem]'>
        <div>
            <Myimages img ={image}/>
           


        </div>
        <div className=' flex flex-col gap-3 mt-[9rem] scale-75 md:scale-100 md:mt-0'>
           <span className='text-5xl font-normal'>{name}</span> 
          
           <Star stars={stars} reviews={reviews} />
          
           <div>
           <span className='font-semibold'>MRP:</span> 
           <del>
           <span className='font-bold'> <FormatPrice price={price + 250000} /></span>
           </del>
           </div>
           <p className='text-blue-600'>Deal of th day: <span className='font-bold'> <FormatPrice price={price} /></span> </p> 
           <span className='flex items-center'>{description}</span> 

           <div className='icons flex mt-[1rem] justify-between w-[28rem] mb-[1rem]'>
          <span className='flex flex-col justify-center items-center'> <TbTruckDelivery  className='truck w-[1.3rem] h-[1.3rem]'/>Free Delivery</span>
          <span className='flex flex-col justify-center items-center'><TbReplace  className='replace w-[1.3rem] h-[1.3rem] '/>7 Days replacement policy</span>
         <span className='flex flex-col justify-center items-center'><MdSecurity className="security w-[1.3rem] h-[1.3rem] "/>2 year warranty</span>

           </div>

           <p>Available: <span className='font-bold'> {stock > 0 ? "In stock" : "Not available"}</span> </p> 
           <p>Id: <span className='font-bold'> {id}</span></p> 
           <p>Brand: <span className='font-bold'> {company}</span></p>

           <hr className='border-black border-[1px] w-[85%]' />

           { stock >= 0 && <Addcart product ={singleProduct}/>}



        </div>
    </div>

     </div>
    </>);
}

export default SinglePage;