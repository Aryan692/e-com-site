import React from 'react';

import { NavLink } from 'react-router-dom';

import Nav from './Nav';


const Header = () => {

    return (<>

  <NavLink  to ="/">
<div className='header h-[12vh] cursor-default bg-gray-100 shadow-lg flex justify-between items-center'>
  

  <img  className='image w-[120px] h-[100px] items-center ml-[30px] cursor-pointer' src="https://www.logolynx.com/images/logolynx/d2/d26fca1e227cba9af36b117e35b3a4c5.png" alt="amazon" />

  

    <Nav />
    </div>

    </NavLink>
    </>)
}
export default Header;