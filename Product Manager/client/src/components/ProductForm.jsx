import React, {useState } from 'react';
import axios from 'axios';



const ProductForm=() => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault(); //prevent default behavior of the submit
        axios.post('http://localhost:8000/api/product/new', { //make a post request to create a new product 
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res) //Optional
            setTitle(""), setPrice(""), setDescription("")
        })
        .catch(err=>console.error(err))
        
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}


export default ProductForm;