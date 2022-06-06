import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"
const CardItem = ({ title, image, price, stock, id}) => {
    return (
        <div>
            <Card className="m-2 bgcard " style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <button className="px-5 bgbutton" variant="primary"><Link className="bglink" to={`/product/${id}`}>Detalle</Link></button>
                    <button className="mt-2 px-5 bgbutton">Comprar</button>
                    <ItemCount stock={stock} />
                </Card.Body>
            </Card>

        
            

        </div>
    )
}
export default CardItem