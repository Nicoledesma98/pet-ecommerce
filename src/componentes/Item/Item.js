import { Card, Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
const CardItem = ({ title, pesos }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./collar.jpg" />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {pesos}
                    </Card.Text>
                    <Button className="px-5" variant="primary">Detalle</Button>
                    <Button className="px-5">Comprar</Button>
                    <ItemCount stock={5} />
                </Card.Body>
            </Card>

        </div>
    )
}
export default CardItem