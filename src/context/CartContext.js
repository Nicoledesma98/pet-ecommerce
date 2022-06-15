import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] =useState(0)
    
    const addItemCart = (product) =>{
       
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (!isInCart) {
             console.log("se agrego el producto", product)
             setTotalPrice(totalPrice + product.price ) //aca va lo tengo que multiplicar por la cantidad, pero como no la tengo no lo puse
            return setCartListItems(cartListItems =>[...cartListItems,product])
        }
    }
    
    const clearCart = () => setCartListItems ([])
      

    

    const data ={
        cartListItems,
        addItemCart,
        clearCart,
        totalPrice,
        

    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
    }


export default CartContext
export { CartProvider }