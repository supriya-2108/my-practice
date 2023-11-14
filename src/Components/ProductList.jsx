import React from 'react'
import { useFilterContext } from '../context/filtercontext'
import GridView from './GridView';
import ListView from './ListView';
import { useProductContext } from '../context/producercontext';

const ProductList = () => {
    const {filter_products,grid_view}=useFilterContext();
    if(grid_view===true){
        return <GridView product={filter_products}/>
    }
    else{
        return <ListView product={filter_products}/>
   
    }
}

export default ProductList
