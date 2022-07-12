import React from "react"
import "./ItemCount.css"
import { useContext } from "react"
import CartContext from '../../context/CartContext';


const ItemCount = ({ setCantidad, cantidad, setShowButton,stock, data}) => {
    const {addItemCart} =useContext(CartContext)
    const product = {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        stock: data.stock,
        description: data.description,
        category: data.category,
        quantity: cantidad
    }

    const addProduct = () =>{
        data.quantity += cantidad;
        setShowButton(true)
        addItemCart({data:product})

    }

    const addCount = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        
    }
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
            <button className="mt-2 px-5 bgbutton textfont" onClick={() =>addProduct(data)}>Agregar al Carrito</button>
        </>
    )
}
// setShowButton(true).this(addItemCart)

export default ItemCount