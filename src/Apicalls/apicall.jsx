import React from "react";
import { useEffect, useState } from "react"

function Product(){
    let [products, setProducts] = useState([])
    useEffect((products) => {  
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then((data) => {setProducts([...data.products])});
     })

     
    return(
        <ul>
            {products.map((products)=> {
                        return<li>{products.title}</li>
                })} 
           
        </ul>
    );
}

export default Product