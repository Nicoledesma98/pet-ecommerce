import { Form } from "react-bootstrap"
import "./Estilos.css"
const Contacto = () => {
    return (
        <div className="container formulario backgroundform textfont" >
            <div className="row backgroundform">
                <div className="col-md-4 m-3 mt-5 bgtransparent">
                    <input type="text" className="form-control " placeholder="Nombre" aria-label="Nombre"></input>
                </div>
                <div className="col-md-4 m-3 mt-5 bgtransparent">
                    <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido"></input>
                </div>
            </div>
            <div className="row backgroundform">
                <div className="col-md-4 m-3 bgtransparent">
                    <input type="email" className="form-control" placeholder="Email" id="inputEmail4"></input>
                </div>
                <div className="col-md-4 m-3 bgtransparent">
                    <input type="tel" className="form-control" placeholder="Telefono" id="inputtel"></input>
                </div>
            </div>
            <div className="col-md-8 m-3 mt-3">
                <input type="text" className="form-control" placeholder="Asunto" aria-label="Asunto"></input>
            </div>
            <div className="col-md-8 m-3 ">
                <Form.Control
                    as="textarea"
                    placeholder="Deje su comentario aca!"
                    style={{ height: '100px' }}
                />
            </div>
            <div className="col-md-8 m-3 bgtransparent">
                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input>
                <label className="form-check-label bgtransparent">Seleccione si esta conforme con que nos comuniquemos con usted a la brevedad!</label>
            </div>
            <div className="col-md-8 m-3 bgtransparent" >
                <button type="submit" className="bgbutton">Enviar</button>
            </div>

        </div>
    )
}
export default Contacto