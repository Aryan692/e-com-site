import React from 'react';
import Product from './Product';

const Gridview = ({products}) =>{

    return (<>
    
    <div className='grid grid-cols-3 gap-3'>
        {
products.map((curElem) =>{
    return <Product key={curElem.id} {...curElem} />;
})
        }
    </div>
    
    </>);
}

export default Gridview;