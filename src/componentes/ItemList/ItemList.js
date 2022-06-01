import React from "react";
import CardItem from "../Item/Item";
import ItemDetailConntainer from "../ItemDetailContainer/ItemDetailContainer";

function ItemList({ products }) {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-1 g-4 ">
                <h1>
                    Collar para tu perro!
                </h1>
                <div className="card-group mx-5">
                    <>
                    { products.map( (product) =>{
                         return (
                             <CardItem key={product.id} title={product.title} price={product.price} stock={product.stock} image={product.image}/> 
                         )
                     } )
                    } 
                    </>
                </div>
               <ItemDetailConntainer/>
            </div>
        </div>
    )
} 
export default ItemList