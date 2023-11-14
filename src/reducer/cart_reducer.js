const cart_reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            let {id,price,amount,product}=action.payload
            let cartProduct
            cartProduct={
                id,
                name:product.title,
                price,
                image:product.image,
                amount,
            }
            return{
                ...state,
                cart:[...state.cart,cartProduct]

            }


        case "AMOUNT_INCREASE":
            let Id=action.payload;
            let updatedCart=state.cart.map((item)=>{
                if (Id===item.id){
                    let incAmt=item.amount+1
                    return {
                        ...item,
                        amount: incAmt,
                      };
                    } 
                else {
                      return item;
                    }
                })
                return { ...state, cart: updatedCart };

        case "AMOUNT_DECREASE":
                let IdUpdate=action.payload;
                let updatedDecCart=state.cart.map((item)=>{
                    if (IdUpdate===item.id){
                        let incAmt=item.amount-1
                        if(item.amount>0){
                        return {
                            ...item,
                            amount: incAmt,
                          };
                        }
                        else{
                            return { ...item,
                            amount: 0,}
                        }
                        } 
                    else {
                          return item;
                        }
                    })
                    return { ...state, cart: updatedDecCart };

        case "REMOVE_ELEMENT_FROM_PRODUCT":
            let deleted_id=action.payload;
            let updatedCartAfterDeletion=state.cart.filter((item)=>item.id!==deleted_id)
            return {...state,cart:updatedCartAfterDeletion}

        case "CLEAR_CART":
            return{
                 ...state,
                 cart:[]
            }

        case "TOTAL_BILL":
            let totalprice=state.cart.reduce((initialVal,curElem)=>{
                let {price,amount}=curElem;
                initialVal =initialVal+price*amount;
                return initialVal
            },0)
            return{
                ...state,
                TotalBill:totalprice
            }
        default:
            return state
    }

}
export default cart_reducer;