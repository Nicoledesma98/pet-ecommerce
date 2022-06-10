import React, { useState, useContext } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock,setCantidad, cantidad, onAdd}) => {
    
    const addCount = () => {
        // if (cantidad < stock) {
            setCantidad(cantidad + 1)
        
    }

    const removeCount = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }
    return (

        <>
        
            <div className="d-flex justify-content-center align-items-baseline">
                <button className="px-5 bgbutton mt-2" onClick={removeCount}>-</button>
                <p className="m-2">{cantidad}</p>

                <button className="px-5 bgbutton mt-2" onClick={addCount}>+</button>
            </div>
        <button className="mt-2 px-5 bgbutton" onClick={() => {onAdd (cantidad)}}>Agregar al Carrito</button>
        </>
    )
}


export default ItemCount