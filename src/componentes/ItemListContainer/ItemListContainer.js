import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productos from "../../utils/productsMock";

const ItemListContainer = ({product }) => {
    const [products, setProducts] = useState([])
    

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);

        })
    }
useEffect(()=>{
     getProducts()
        .then((res) => {
            console.log("la respuesta es:",res);
            setProducts(res)
        })
},[])
   
return (<div><ItemList products={products}/></div>); 

}



export default ItemListContainer