import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
const ItemDetail = ({ data }) => {
    

    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    return (
        <div className="Container">
            <div className="row">
                    <div className="col-md-8 mt-5">
                    <img style={{ width: '30rem' }} className="nico" src={data.image}></img>
                </div>
                <div className="col-md-3 mt-5 ">
                    <h1 className="bgbutton textfont">{data.title}</h1>
                    <div>
                        <h5 className="bgbutton textfont">su precio es:${data.price}</h5>
                        <span className="textfont">3 cuotas sin interes de:$ {data.price / 3}</span>
                    </div>
                    <div className="my-1  d-flex flex-column justify-content-center align-self-start">
                        <p className="bgbutton textfont">Elija el talle segun el tamaño de su perro:</p>
                        <select className="bgbutton textfont " aria-label="Default select example">
                            <option className="bgbutton" value="1">Pequeño</option>
                            <option className="bgbutton" value="2">Mediano</option>
                            <option className="bgbutton" value="3">Grande</option>
                        </select>
                    </div>
                    <p className="nico py-5 textfont">{data.description}</p>
                     {!showButton ?
                    <p className="textfont">Seleccione la cantidad:
                        <ItemCount setCantidad={setCantidad} cantidad={cantidad} setShowButton={setShowButton} stock={data.stock} data={data}/>
                    </p>
                    : 
                    <button><Link to={"/cart"} className="bgbuttond textfont">Terminar compra</Link></button>}
                    
                </div>
                
            </div>
        </div>  
    )
}
export default ItemDetail

// 