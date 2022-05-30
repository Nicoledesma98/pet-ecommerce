import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"
const CardItem = ({ title, pesos,imagen,stock}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {pesos}
                    </Card.Text>
                    <button className="px-5 bgbutton" variant="primary">Detalle</button>
                    <button className="mt-2 px-5 bgbutton">Comprar</button>
                    <ItemCount stock={stock} />
                </Card.Body>
            </Card>

        </div>
    )
}
export default CardItem