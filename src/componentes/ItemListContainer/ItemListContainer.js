import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../utils/firebaseConfig"



const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([])
    const { category } = useParams();

    useEffect(() => {
        setProducts([])
        getProducts()
            .then( (productos) => {
                category ?  filterFirebase() : setProducts(productos)

})}, [category])


const getProducts = async () => {
    const productCollection = collection(db, "producto")
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product

    })
    return productList
}

const filterFirebase = async () => {
    const productRef = collection(db, 'producto')
    const queryResult = query(productRef, where("categoria", "==", category));
    const querySnapshot = await getDocs(queryResult);
    const productList = querySnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return setProducts(productList)
}
        // if (category ===undefined) {
        //     
        //         console.log("productos ", producFire)
        //         
        //     })
        //     .catch(()=>{
        //         console.log("ERROR")
        //     })




        
        return (<div><ItemList products={products} title={"Nuestros productos"} /></div>);

    }



export default ItemListContainer