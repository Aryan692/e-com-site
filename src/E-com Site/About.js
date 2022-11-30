import React from 'react';

// import { AppContext } from '../context/Contextapi';
import Herosection from './E-com_components/Herosection';

// import { useProductContext } from '../context/Contextapi';

const About = () => {

    // const {myName} = useProductContext();

    // const {myName} = useContext(AppContext);

    const data ={
      name:  "My E-commerce"
    };

    return (<>
   {/* {myName} */}
    <Herosection myData ={data} />

</>);
}


export default About;