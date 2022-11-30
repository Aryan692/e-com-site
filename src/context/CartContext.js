
import { createContext , useContext , useReducer , useEffect } from "react";
import reducer from "../reducer/CartReducer";


const CartContext = createContext();


const getLocaleCartData = ()=>{

    let LocalCartData = localStorage.getItem("AryanCart");

    // if (LocalCartData === []){

    //     return [];

    // }
    // else{
    //     return JSON.parse(LocalCartData);
    // }


    const parseData = JSON.parse(LocalCartData);

    if(!Array.isArray(parseData)) return [];
    return parseData;

};

const initialState ={

    // cart:[],

    cart: getLocaleCartData(),
    total_item: "",
    total_price :"",
    shipping_fee: 5000,
}


const CartProvider = ({children}) =>{

    const [state , dispatch ] = useReducer(reducer , initialState);

    
    const addToCart = (id , amount , color , product) => {
        dispatch({ type:"ADD_TO_CART" , payload:{id , amount , color , product} })
    };


    const clearCart = () =>{

        dispatch({type:"CLEAR_CART"})
    }


    const setIncrease =(id)=>{
        dispatch({type:"SET_INCREASE" , payload: id})
    }

    const setDecrease = (id) =>{

        dispatch({type:"SET_DECREASE", payload: id})
    }

    useEffect(() => {

        dispatch ({type:"CART_TOTAL_ITEM"})
        dispatch({type:"CART_TOTAL_PRICE"})
      localStorage.setItem("AryanCart", JSON.stringify(state.cart))
    }, [state.cart])
    
    


    const removeItem = (id) =>{

dispatch({type :"REMOVE_ITEM" , payload :id})
    }

    return <CartContext.Provider value={{...state , addToCart , removeItem , clearCart , setDecrease , setIncrease}}>{children}</CartContext.Provider>
}


const useCartContext = () =>{
    return useContext(CartContext);
}
export {CartProvider , useCartContext};