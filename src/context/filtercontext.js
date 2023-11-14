import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./producercontext";
import reducer from '../reducer/filter_reducer';

const FilterContext = createContext();
const inititalState={
    filter_products:[],
    all_products:[],
    grid_view:true,
    list_view:false,
    sort_values:"",
    filters:{
        text:"",
        category:"all",
        brand:"all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

export const FilterContextProvider = ({ children }) => {
    const {products}=useProductContext();
    const [state,dispatch]=useReducer(reducer,inititalState);


// To set the grid view
const setGridView=()=>{
    return dispatch({type:"SET_GRIDVIEW"})
}

// To set the List view
const setListView=()=>{
    return dispatch({type:"SET_LISTVIEW"})
}


// Sorting
const sorting=()=>{
    return dispatch({type:"SORT_VALUES"})
}

// Update Filter Values
const updateFilterValue=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    return dispatch({type:"UPDATE_FILTER_VALUES",payload:{name,value}})
}

// SORT VALUES ACCORDING TO THE PRICE
    useEffect(()=>{
        // dispatch({type:"UPDATE_PRODUCTS",payload:products});
        dispatch({type:"SORTING_PRODUCTS",payload:products});
    }, [products,state.sort_values,state.filters]);

    useEffect(()=>{
        dispatch({type:"UPDATE_PRODUCTS",payload:products});
        // dispatch({type:"SORTING_PRODUCTS",payload:products});
    }, [products,state.filters]);

    useEffect(()=>{
        dispatch({type:"Load_Filter_Data",payload:products})
    },[products]);
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
      }, [products]);
    
    
  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};