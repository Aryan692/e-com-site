import React from 'react';
import FeatureProducts from './E-com_components/FeatureProducts';

import Herosection from './E-com_components/Herosection';
import Services from './E-com_components/Services';
import Trusted from './E-com_components/Trusted';




 const Home = () => {

    const data = {
        name: "My Store"
    }
 
     return ( <>

             <Herosection myData={data} />

             <FeatureProducts />

             <Services />

             <Trusted />

            
     </>);

 }

  export default Home;