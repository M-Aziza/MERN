import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'



const ProductUpdate=() => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id}=useParams()
    const history = useHistory();

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/product/"+id)
        .then(res => {
            setTitle(res.data.title) 
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => console.error(err))
    },[])

    const onSubmitHandler = e => {
        e.preventDefault(); //prevent default behavior of the submit
        axios.put('http://localhost:8000/api/product/update/'+id, { //make a post request to create a new product 
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res) //Optional
            setTitle(""), setPrice(""), setDescription("")
        })
        .catch(err=>console.error(err))
        history.push("/product")
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


export default ProductUpdate;