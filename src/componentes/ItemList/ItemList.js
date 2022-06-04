import React from "react";
import CardItem from "../Item/Item";
import ItemDetailConntainer from "../ItemDetailContainer/ItemDetailContainer";
import "./ItemList.css"
function ItemList({ products }) {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-1 g-4 ">
                <h1 className="martitulo">
                    Collar para tu perro!
                </h1>
                <div className="card-group mx-5 mt-1">
                    <>
                    { products.map( (product) =>{
                         return (
                             <div key={product.id}>
                                 <CardItem  title={product.title} price={product.price} stock={product.stock} image={product.image} id={product.id}/> 
                             </div>
                             
                         )
                     } )
                    } 
                    </>
                </div>
            </div>
        </div>
    )
} 
export default ItemList