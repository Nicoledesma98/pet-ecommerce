import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({product }) => {
    const [products, setProducts] = useState([])
    const productos = [
        {
            title: "Collar de perro",
            price: 800,
            description: "",
            stock: 2,
            image:"collar.jpg",
            id: 1


        },

        {
            title: "Collar rosa",
            price: 300,
            description: "",
            stock: 10,
            image:"./collar-perro-rosa.jpg",
            id: 2

        },
        {
            title: "Ac/Dc",
            price: 500,
            description: "",
            stock: 5,
            image:"collar-perro-rock.jpg",
            id: 3

        },
        {
            title: "Collar de cuero",
            price: 500,
            description: "",
            stock: 6,
            image:"collar-perro-cuero.jpg",
            id: 4

        }
    ]

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