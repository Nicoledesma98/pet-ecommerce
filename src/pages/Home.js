import React from 'react';
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import { CashCoin, Lock, Truck } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
const Inicio = () => {
    return (
        <Container>
            <Row className='col-md-12'>
                <Col className='marginb d-flex justify-content-center align-items-center textfont'>
                    <img src='../logo2.png' alt='logo' className='pet' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className='mt-4 textfont'>Aquí encontrarás los mejores y más lindos accesorios para mascotas</h3>
                </Col>
            </Row>
            <Row>
                <Col className='imagenes'>
                    <img src='../carrousel3.jpg' alt='imagen perro collar' />
                    <img src='../carrousel2.jpg' alt='imagen gato collar' />
                    <img src='../perro-acdc.jpg' alt='imagen perro acdc' />
                    <img src='../collar-gato2.jpg' alt='imagen gato collar fucsia' />
                    <img src='../cama-gato.jpg' alt='imagen gato collar con cascabel' />
                </Col>
            </Row>
            <ItemListContainer title={"Productos recomendados"} />
            <Row className='mt-5 textfont'>
                <Col className='borderhome'>
                <h5><Truck className='icones' />ENVÍOS A TODO EL PAÍS</h5>
                <span>Si tu compra supera los $3500.- enviamos GRATIS a la sucursal de Correo Argentino de tu ciudad.</span>
                </Col>
                <Col className='borderhome'>
                <h5><Truck className='icones' />ENVÍOS A TODO EL PAÍS</h5>
                <span>Si tu compra supera los $3500.- enviamos GRATIS a la sucursal de Correo Argentino de tu ciudad.</span>
                </Col>
                <Col className='borderhome'>
                 <h5><CashCoin className='icones' />MEDIOS DE PAGO</h5>
                <span>Transferencia bancaria, Mercado Pago, UALA, PagoFacil, RapiPago, BaproPagos, ProvinciaPagos, Ripsa, CobroExpress.</span>
                </Col>
            </Row>
        </Container>
    )
}
export default Inicio