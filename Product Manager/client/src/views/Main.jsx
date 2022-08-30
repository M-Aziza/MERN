import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main= ()=>{
    const [products,setProduct]=useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
            })
            .catch(err => console.error(err));
    },[products]);

    return(
        <>
        <ProductForm/>
        <hr/>
        <ProductList products={products} />
        </>
    )

}
export default Main;