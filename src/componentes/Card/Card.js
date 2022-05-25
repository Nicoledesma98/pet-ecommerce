import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"

const CardItem = ({title,pesos}) => {
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count +1)
    }
const removeCount =() => {
    if (count > 0) {
        setCount(count - 1)
    }
    
}

return (
    <div>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./collar.jpg" />
                        <Card.Body >
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {pesos}
                            </Card.Text>
                            <div className="d-flex justify-content-center align-items-baseline">
                            <Button className="px-5" onClick={removeCount}>-</Button>
                            <p className="m-2">{count}</p>
                            <Button className="px-5" onClick={addCount}>+</Button>
                            </div>
                            
                            <Button className="px-5" variant="primary">detalle</Button>
                        </Card.Body>
                    </Card>
                
    </div>
)
}
export default CardItem