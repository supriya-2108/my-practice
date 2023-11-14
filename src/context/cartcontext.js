import { createContext,useReducer,useContext, useEffect } from "react";
import reducer from '../reducer/cart_reducer';
const CartContext=createContext();
    const getlocalCartData=()=>{
        let newCartData=localStorage.getItem("SupriyaStore");
        if(newCartData===null){
            return []
        }
        else{
            return JSON.parse(newCartData)
        }
    }
const initialState={
    cart:getlocalCartData(),
    TotalBill:0
}
export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    // add products to cart functionality
    const addToCart=(id,price,amount,product)=>{
        return dispatch({type:"ADD_TO_CART",payload:{id,price,amount,product}})
    }

    const setIncrease=(id)=>{
        return dispatch({type:"AMOUNT_INCREASE",payload:id})
    }
    const setDecrease=(id)=>{
        return dispatch({type:"AMOUNT_DECREASE",payload:id})
    }

    const removeItem=(id)=>{
        return dispatch({type:"REMOVE_ELEMENT_FROM_PRODUCT",payload:id})
    }
    const clearCart=()=>{
        return dispatch({type:"CLEAR_CART"})
    }

    useEffect(()=>{localStorage.setItem("SupriyaStore",JSON.stringify(state.cart))},[state.cart])
    useEffect(()=>{return dispatch({type:"TOTAL_BILL"})},[state.cart])
    return (<CartContext.Provider value={{...state,addToCart,setIncrease,setDecrease,removeItem,clearCart}}>{children}</CartContext.Provider>)
}

export const useCartContext = () => {
    return useContext(CartContext);
  };
