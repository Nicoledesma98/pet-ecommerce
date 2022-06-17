import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productos from "../../utils/productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({  title }) => {
    const [products, setProducts] = useState([])
    const {category,id} = useParams() ;
    
    const getProducts = () => {
        return new Promise((resolve, reject) => {

            if(category) {
                resolve(productos.filter((prod) => prod.categoria === category))
                
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
        .then((response) => {
            setProducts(response)
        })
},[category])
return (<div><ItemList products={products} title={title}/></div>); 

}



export default ItemListContainer