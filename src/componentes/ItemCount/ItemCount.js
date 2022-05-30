import React, { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(0)
    const addCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (

        
            <div className="d-flex justify-content-center align-items-baseline">
                <button className="px-5 bgbutton mt-2" onClick={removeCount}>-</button>
                <p className="m-2">{count}</p>

                <button className="px-5 bgbutton mt-2" onClick={addCount}>+</button>
            </div>
        
    )
}

export default ItemCount