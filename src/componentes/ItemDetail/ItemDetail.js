import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ data, stock }) => {

    console.log("data desde itemdetail:", data, "el stock es", stock)

    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    return (
        <div className="Container">
            <div className="row">
                    <div className="col-md-8 mt-5">
                    <img style={{ width: '30rem' }} className="nico" src={data.image}></img>
                </div>
                <div className="col-md-3 mt-5 ">
                    <h1 className="bgbutton">{data.title}</h1>
                    <div>
                        <h5 className="bgbutton">su precio es:${data.price}</h5>
                        <span className="">3 cuotas sin interes de:$ {data.price / 3}</span>
                    </div>
                    <div className="my-1  d-flex flex-column justify-content-center align-self-start">
                        <p className="bgbutton">Elija el talle segun el tamaño de su perro:</p>
                        <select className="bgbutton  " aria-label="Default select example">
                            <option className="bgbutton" value="1">Pequeño</option>
                            <option className="bgbutton" value="2">Mediano</option>
                            <option className="bgbutton" value="3">Grande</option>
                        </select>
                    </div>
                    <p className="nico py-5">{data.description}</p>
                     {!showButton ?
                    <p className="">Seleccione la cantidad:
                        <ItemCount setCantidad={setCantidad} cantidad={cantidad} setShowButton={setShowButton} />
                    </p>
                    : 
                    <button><Link to={"/cart"} className="bgbuttond">Terminar compra</Link></button>}
                    
                </div>
                
            </div>
        </div>  
    )
}
export default ItemDetail

// 