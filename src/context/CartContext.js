import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    
    const addItemCart = (product) =>{
       
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (!isInCart) {
             console.log("se agrego el producto", product)
            return setCartListItems(cartListItems =>[...cartListItems,product])
        }
    }
    
    const clearCart = () => setCartListItems ([])
      

    

    const data ={
        cartListItems,
        addItemCart,
        clearCart
        

    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
    }


export default CartContext
export { CartProvider }