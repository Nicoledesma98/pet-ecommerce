import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] =useState(0)
    
    const addItemCart = (product) =>{
      
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (!isInCart) {
             console.log("se agrego el producto", product.data.price)
             setTotalPrice(totalPrice + product.data.price*product.data.quantity ) //aca va lo tengo que multiplicar por la cantidad, pero como no la tengo no lo puse
            return setCartListItems(cartListItems =>[...cartListItems,product])
            
        }
    }
    const deletProduct = (product) => {
        console.log("producto a borrar:",product)
        setCartListItems(
            cartListItems.filter((cartProduct) => cartProduct.id !== product.id)
        )
        setTotalPrice(totalPrice - product.data.price*product.data.quantity)
        
    }
    const clearCart = () => 
    setCartListItems ([])
      

    

    const data ={
        cartListItems,
        addItemCart,
        clearCart,
        totalPrice,
        deletProduct

    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
    }


export default CartContext
export { CartProvider }