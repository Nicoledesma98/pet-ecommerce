import { Form } from "react-bootstrap"
import "./Estilos.css"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
const Contacto = () => {
    return (
        <Container className=" formulario backgroundform textfont mb-5">
            <Row className="backgroundform">
                <Col  className="m-3 mt-5 bgtransparent">
                    <input type="text" className="form-control " placeholder="Nombre" aria-label="Nombre"></input>
                </Col>
                <Col className="m-3 mt-5 bgtransparent">
                <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido"></input>
                </Col>
            </Row>
            <Row className="backgroundform">
                <Col className="m-3 bgtransparent">
                    <input type="email" className="form-control" placeholder="Email" id="inputEmail4"></input>
                </Col>
                <Col className=" m-3 bgtransparent">
                 <input type="tel" className="form-control" placeholder="Telefono" id="inputtel"></input>
                </Col>
            </Row>
            <Row className="backgroundform">
                <Col className="m-3 mt-3 bgtransparent">
                <input type="text" className="form-control" placeholder="Asunto" aria-label="Asunto"></input>
                </Col>
            </Row>
            <Row className="backgroundform">
                <Col className="m-3 bgtransparent">
                <Form.Control
                    as="textarea"
                    placeholder="Deje su comentario aca!"
                    style={{ height: '100px' }}
                />
                </Col>
            </Row>
            <Row className="backgroundform">
                <Col className= "m-3 bgtransparent">
                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input>
                <label className="form-check-label bgtransparent">Seleccione si esta conforme con que nos comuniquemos con usted a la brevedad!</label>
                </Col>
                <Col className="m-3 bgtransparent" >
                <button type="submit" className="bgbuttonc shadow-inset-center">Enviar</button>
                </Col>
            </Row>
        </Container>
        
    )
}
export default Contacto