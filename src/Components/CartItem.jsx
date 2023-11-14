import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartcontext";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, name, image, price, amount }) => {
  const { removeItem ,setIncrease ,setDecrease} = useCartContext();

  return (
    <div className="cart_heading grid grid-four-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      
       <CartAmountToggle
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;