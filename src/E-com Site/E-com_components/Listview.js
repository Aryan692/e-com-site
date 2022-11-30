import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../../Helpers/Formatprice';

const Listview = ({products})=>{

    return (<>
    

<div className='container grid gap-3 '>
    

        {
            products.map((curElem) =>{

               const {id , name , image , description, price} = curElem;

               return (<>

               <div className='grid grid-cols-2 border-[2px]'>
                <figure>
                    <img src={image} alt={name} className="w-[10rem] h-[8rem] ml-[1rem] py-2"/>
                </figure>

                <div>
                    <h1>{name}</h1>
                    <p><FormatPrice price ={price} /></p>
                    <p>{description.slice(0, 80)}...</p>

                   <NavLink to={`/singlePage/${id}`}>
                    <button className='w-[6rem] h-[2rem] rounded-md bg-blue-600 text-white hover:border-[2px] hover:bg-white hover:text-blue-600 transition-all ease-out hover:border-blue-600 mt-2 mb-2'>Read more...</button>
                    </NavLink>
                </div>
               </div>
               
               </>
               )
            })
        }

    
</div>

    </>);


}
export default Listview;