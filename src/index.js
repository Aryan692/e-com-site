import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'
import { AppProvider } from './context/Contextapi'

import {FilterContextProvider} from './context/FilterContext'
import { Auth0Provider } from "@auth0/auth0-react";



import './index.css'





const root = ReactDOM.createRoot(document.getElementById('root'));

// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const id = process.env.REACT_APP_AUTH_ID;

root.render(
  <Auth0Provider
  domain="dev-3qdhhkaud5nejbte.us.auth0.com"
  clientId="KO5qRyFWgc9Zf8CE9f2yntKdopyK3WNv"
  redirectUri={window.location.origin}
>
  

  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>

  
<FilterContextProvider>

  <CartProvider>

 <App/>  
 </CartProvider>
 </FilterContextProvider>

 </AppProvider>
 </BrowserRouter>
 
 </React.StrictMode>

 </Auth0Provider>,

)
