import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList=(props)=>{

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/product/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
    return(
        <>
        {props.products.map((product,i)=>{
            return(
                <>
                <Link to={"/product/"+product._id}><p kay={i}>{product.title}</p></Link>
                <button onClick={()=>{handleDelete(product._id)}} className="btn btn-outline-danger">Delete</button>
                
                </>
            )
        })}
        </>
    )
}
export default ProductList;
