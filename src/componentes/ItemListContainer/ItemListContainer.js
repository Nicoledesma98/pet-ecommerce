import React, { useState, useEffect } from "react";


const ItemListContainer = ({product }) => {
    const [products, setProducts] = useState([])
    const productos = [
        {
            title: "Collar de perro",
            precio: 800,
            description: "",
            stock: 2,
            image: "",
            id: 1


        },

        {
            title: "Collar rosa",
            precio: 300,
            description: "",
            stock: 10,
            id: 2

        },
        {
            title: "Ac/Dc",
            precio: 500,
            description: "",
            stock: 5,
            id: 3

        },
        {
            title: "Collar de cuero",
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