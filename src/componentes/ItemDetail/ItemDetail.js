import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({ data,stock }) => {
    console.log("data desde itemdetail:", data,"el stock es",stock)
    return (
        <div className="Container">
            <div className="row">
                <div className="col-md-6 ">
                    <img style={{ width: '30rem' }} src={data.image}></img>
                </div>
                <div className="col-md-6">
                    <h2 className="bordeporlados">{data.title}</h2>
                    <div className="my-5">
                        <p>Elija el talle segun el tamaño de su perro:</p> 
                        <select className=" bgbuttond" aria-label="Default select example">
                            <option className="bgbuttond" value="1">Pequeño</option>
                            <option className="bgbuttond" value="2">Mediano</option>
                            <option className="bgbuttond" value="3">Grande</option>
                        </select>
                    </div>
                    <p className="bordeporlados">{data.description}</p>
                    <p>Seleccione la cantidad:
                        <ItemCount stock={stock} />
                    </p>
                    <button className="mt-2 px-5 bgbutton">Comprar</button>
                </div>

            </div>
        </div>
    )
}
export default ItemDetail