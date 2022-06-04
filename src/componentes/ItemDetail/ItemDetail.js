import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({ data, stock }) => {

    console.log("data desde itemdetail:", data, "el stock es", stock)
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
                    <p className="">Seleccione la cantidad:
                        <ItemCount stock={stock} />
                    </p>
                    <button className="mt-2 px-5 bgbutton">Comprar</button>
                </div>
            </div>
        </div>  
    )
}
export default ItemDetail

// 