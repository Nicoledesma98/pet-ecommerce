import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productos from "../../utils/productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({product }) => {
    const [products, setProducts] = useState([])
    const {categoria} = useParams() ;
    const getProducts = () => {
        return new Promise((resolve, reject) => {

            if(categoria) {
                resolve(productos.filter((prod) => prod.categoria === categoria));
            } else {
                // resolve(productos);
                 setTimeout(() => {
                resolve(productos)
            }, 2000);
            }

           

        })
    }
useEffect(()=>{
     getProducts()
        .then((res) => {
            setProducts(res)
        })
},[categoria])
   console.log ("esto es la categoria", categoria)
return (<div><ItemList products={products}/></div>); 

}



export default ItemListContainer