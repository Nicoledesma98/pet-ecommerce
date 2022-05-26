import React, { useState } from "react"
import { Button } from "react-bootstrap"

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
                <Button className="px-5" onClick={removeCount}>-</Button>
                <p className="m-2">{count}</p>

                <Button className="px-5" onClick={addCount}>+</Button>
                <p>stock: {stock}</p>
            </div>
        
    )
}

export default ItemCount