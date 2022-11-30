
const CartReducer = (state , action) =>{

    if(action.type === "ADD_TO_CART"){

    let {id , amount , color , product } = action.payload;

    let ExistingProduct = state.cart.find((curElem) =>{

     return   curElem.id === id + color;
    })


    
     
if(ExistingProduct){
    let UpdatedCart  = state.cart.map((curElem) =>{
        if(curElem.id === id + color){

            let newAmount = curElem.amount + amount;

            if(newAmount >= curElem.max){
              newAmount = curElem.max
            }

            return{
                ...curElem,
                amount : newAmount,
            }
           

        }
        else{
           return curElem;
        }
    });

    return{
        ...state ,
        cart: UpdatedCart
    }
}
else{
   let  CartProduct = {

        id: id + color,
        name : product.name,
        color, 
        amount ,
        image : product.image[0].url,
        price: product.price,
        max: product.stock,
    }


    return {
        ...state ,
        cart: [...state.cart , CartProduct],
    }
}
    }



    if (action.type === "REMOVE_ITEM"){


        let updateCart = state.cart.filter((curElem) =>{

            return curElem.id !== action.payload;
        })

        return{
            ...state,
            cart: updateCart,
        }

    }

    if(action.type === "CLEAR_CART"){
return{
    ...state,
    cart: [],

}
    }


    if(action.type === "SET_DECREASE"){
        let updatedProduct = state.cart.map((curElem) =>{
            if( curElem.id === action.payload){
                let decAmount = curElem.amount - 1;

                if (decAmount <= 1){
                    decAmount = 1;
                }

                return {
                    ...curElem,
                   amount :decAmount,
                }

            }
            else{
             return   curElem;
            }
        })
        return{

            ...state,
            cart: updatedProduct,

        }
    }

    if(action.type === "SET_INCREASE"){
        let updatedProduct = state.cart.map((curElem)=>{
            if(curElem.id === action.payload){
                let IncAmount = curElem.amount + 1;

                if (IncAmount >= curElem.max){
                    IncAmount = curElem.max
                }

                return{
                    ...curElem,
                    amount: IncAmount,
                }
            }
            else{
              return  curElem;
            }
        })
        return{
            ...state,
            cart: updatedProduct,
        }
    }

    if(action.type === "CART_TOTAL_ITEM"){
        let updatedItem = state.cart.reduce((initialVal , curElem)=>{
            let {amount} = curElem;

            let initialValue = initialVal + amount;
            return initialValue;
        }, 0)
        
        return{

            ...state,
            total_item : updatedItem,
        }
    }

    if(action.type === "CART_TOTAL_PRICE"){
let total_price = state.cart.reduce((initialVal , curElem)=>{

    let { price , amount } = curElem;
     initialVal = initialVal + price * amount
    return initialVal;
} , 0 )
return{
    ...state,
    total_price,
}
    }
   
    return state;
}

export default CartReducer;