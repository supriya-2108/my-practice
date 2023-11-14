import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from "../styles/Button";
import { useCartContext } from '../context/cartcontext';
const AddToCart = ({product}) => {
  const {addToCart}=useCartContext()
const  {id,price}=product
    const [amount,setAmount]=useState(1);
    const SetIncrease=()=>{
        setAmount(amount+1)
    }
    const setDecrement=()=>{
        amount!==0? setAmount(amount-1) : setAmount(1)
        console.log("dncrease")
    }

  return (
    <Wrapper>
       <span>Product Quantity: </span> <button className="qty-btn" onClick={SetIncrease}> + </button><span>{amount}</span><button className="qty-btn" onClick={setDecrement}> - </button><br/>
       <NavLink to="/cart" onClick={() => addToCart(id, price,amount, product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper=styled.section`

span{
    font-size:1.6rem;
    font-weight:200;
}

.qty-btn{
height:4rem;
width:2rem;
font-size:2.5rem;
margin:1.5rem;
}


`;
export default AddToCart
