import React, { useState, useEffect } from "react";
const ItemListContainer = ({ }) => {
    const [products, setProducts] = useState([])
    const productos = [
        {
            title: "collar de perro",
            precio: 800,
            description: "",
            stock: 2,
            id: 1

        },

        {
            title: "collar de gato",
            precio: 300,
            description: "",
            stock: 10,
            id: 2

        },
        {
            title: "pretal de perro",
            precio: 500,
            description: "",
            stock: 5,
            id: 3

        },
        {
            title: "pretal de gato",
            precio: 500,
            description: "",
            stock: 6,
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
   



}



export default ItemListContainer