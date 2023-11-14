const filter_reducer=(state,action)=>{
    switch (action.type){
        
        case "LOAD_FILTER_PRODUCTS":
        let priceArr = action.payload.map((curElem) => curElem.price);
        
  
        // 1way
        // console.log(Math.max.apply(null, priceArr));
  
        // let maxPrice = priceArr.reduce(
        //   (initialVal, curVal) => Math.max(initialVal, curVal),
        //   0
        // );
        // console.log(
        //   "🚀 ~ file: filterReducer.js ~ line 16 ~ filterReducer ~ maxPrice",
        //   maxPrice
        // );
  
        let maxPrice = Math.max(...priceArr);
       
  
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          filters: { ...state.filters, maxPrice, price: maxPrice },
        };
        case "Load_Filter_Data":
            return{
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload]
            }

        case "SET_GRIDVIEW":
            return{
                ...state,
                grid_view:true,
                list_view:false
            }
        case "SET_LISTVIEW":
            return{
                ...state,
                list_view:true,
                grid_view:false
            }
        case "SORT_VALUES":
            let userSortValue=document.getElementById("sort");
            let sorted_value=userSortValue.options[userSortValue.selectedIndex].value;
            return{
                ...state,
                sort_values:sorted_value
            }

            case "SORTING_PRODUCTS":
                let newSortData;
                let tempSortProduct = [...action.payload];
                if(state.sort_values==="lowest"){
                    newSortData=tempSortProduct.sort((a, b) =>{
                    return parseFloat(a.price) - parseFloat(b.price);
                    });
                }
                if(state.sort_values==="highest"){
                    newSortData=tempSortProduct.sort((a, b) =>{
                    return parseFloat(b.price) - parseFloat(a.price);
                    });
                }
              
                if(state.sort_values==="a-z"){
                    newSortData=tempSortProduct.sort((a,b)=>{
                        return a.title.localeCompare(b.title)
                    })
                }
                if(state.sort_values==="z-a"){
                    newSortData=tempSortProduct.sort((a,b)=>{
                        return b.title.localeCompare(a.title)
                    })
                }
          
                return {
                  ...state,
                  filter_products: newSortData,
                };
            case "UPDATE_FILTER_VALUES":
                const {name,value}= action.payload;
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        [name]:value
                    },
                };

            case "UPDATE_PRODUCTS":
                let { all_products } = state;
                let tempFilterProduct = [...all_products];
          
                const { text, category, brand,price } = state.filters;
          
                if (text) {
                  tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.title.toLowerCase().includes(text);
                  });
                }
          
                if (category !== "all") {
                  tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.category === category
                  );
                }
          
                if (brand !== "all") {
                  tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.brand === brand
                  );
                }

                if (price === 0) {
                    tempFilterProduct = tempFilterProduct.filter(
                      (curElem) => curElem.price == price
                    );
                  } else {
                    tempFilterProduct = tempFilterProduct.filter(
                      (curElem) => curElem.price <= price
                    );
                  }
                // if (color) {
                //   tempFilterProduct = tempFilterProduct.filter((curElem) =>
                //     curElem.colors.includes(color)
                //   );
                // }
                return {
                  ...state,
                  filter_products: tempFilterProduct,
                };
                        
                case "CLEAR_FILTERS":
                    return {
                        ...state,
                        filters: {
                        ...state.filters,
                        text: "",
                        category: "all",
                        company: "all",
                        color: "all",
                        maxPrice: 0,
                        price: state.filters.maxPrice,
                        minPrice: state.filters.maxPrice,
                        }
                    };

            default:
                return state
    }
}

export default filter_reducer;