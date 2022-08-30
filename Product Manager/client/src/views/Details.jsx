import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Detail=()=>{
    const [product,setProduct]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/"+id)
        .then(res=>setProduct(res.data))
        .catch(err => console.error(err))
    },[id])

    return (
        <div>
            <h1>Product Details</h1>
            <p> {product.title}</p>
            <p> {product.price}</p>
            <p> {product.description}</p>
            <Link to={"/product/update/"+id}>Edit</Link>
            {" | "}
            <Link to={"/product"}>Go Back</Link>
        </div>
    );
    }
export default Detail;
// export default Detail;