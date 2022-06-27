import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import "./Item.css"
const CardItem = ({ title, image, price, stock, id,cantidad}) => {
    const {addItemCart } = useContext(CartContext)

    return (
        <div>
            <Card className="m-2 bgcard " style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body >
                    <Card.Title className="textfont">{title}</Card.Title>
                    <Card.Text>
                      ${price}
                    </Card.Text>
                    <button className="px-5 bgbutton textfont" variant="primary"><Link className="bglink" to={`/product/${id}`}>Detalle</Link></button>
                    <button className="mt-2 px-5 bgbutton textfont" onClick={() =>addItemCart({title, image, price, stock, id})}>Comprar</button>
                </Card.Body>
            </Card>

        
            

        </div>
    )
}
export default CardItem