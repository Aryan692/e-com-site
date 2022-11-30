import React from 'react';
// import { useFilterContext } from '../context/FilterContext';
import Filter from './E-com_components/Filter';
import ProductList from './E-com_components/ProductList';
import Sorting from './E-com_components/Sorting';


const Products = () => {

    

    return(<>
    
     <div>
        <div className='flex gap-4 mt-3'>

            <div><Filter /></div>
            <div>
                <div>
               <Sorting />
                </div>

                <ProductList />
            </div>
        </div>
     </div>

     
    </>);
}

export default Products;
