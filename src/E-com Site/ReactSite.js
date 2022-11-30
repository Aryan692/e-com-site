import React from 'react';

import {Routes, Route} from "react-router-dom";
import About from './About';
import Cart from './Cart';
import Contact from './Contact';
import Header from './E-com_components/Header';
import Error from './Error';
import Home from './Home';
import Products from './Products';
import SinglePage from './SinglePage';
import Shop from './E-com_components/Shop';
import Footer from './E-com_components/Footer';




const ReactSite = () => {

    return (<>

    <div className='main w-full h-screen m-0 p-0'>


    <Header />
        

    <Routes>


         <Route exact path ="/"  element = {<Home />} />
         <Route exact path ="/About"  element = {<About />} />
         <Route exact path ="/Products"  element = {<Products />} />
         <Route exact path ="/Contact"  element = {<Contact />} />
         <Route exact path ="/SinglePage/:id"  element = {<SinglePage />} />
         <Route exact path ="/Cart"  element = {<Cart />} />
         <Route exact path ="/Shop"  element = {<Shop />} />
         <Route exact path ="*"  element = {<Error/>} />


    </Routes>

    <Footer />

   

    </div>




    </>);
}

export default ReactSite;