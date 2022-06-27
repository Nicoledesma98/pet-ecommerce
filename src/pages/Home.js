import React from 'react';
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import {CashCoin,Lock, Truck } from 'react-bootstrap-icons';


const Inicio = () => {
    
    return (
        <div className='col-md-12'>
            <div className='marginb d-flex justify-content-center align-items-center textfont'>
           <h1 className='me-5'>Bienvenidos a</h1><img src='../logo2.png' alt='logo' className='pet'/>
        </div>
        <h6 className='mt-4 textfont'>Aquí encontrarás los mejores y más lindos accesorios para mascotas</h6>

        <div className='imagenes'>
            <img src='../carrousel1.jpg'/>
            <img src='../carrousel2.jpg'/>
            <img src='../perro-acdc.jpg'/>
            <img src='../pretal-gato.jpg'/>
            <img src='../pretal-perro.jpg'/>

        </div>
        <ItemListContainer title={"Productos recomendados"}/>
        <div className='container mt-5 textfont'>
            <div className='row'>
                <div className='col-md-4 borderhome'>
                    <h5><Truck className='icones'/>ENVÍOS A TODO EL PAÍS</h5>
                    <span>Si tu compra supera los $3500.- enviamos GRATIS a la sucursal de Correo Argentino de tu ciudad.</span>
                </div>
                <div className='col-md-4 borderhome'>
                    <h5><Lock className='icones'/>SITIO SEGURO</h5>
                    <span>Protegemos tus datos</span>
                </div>
                <div className='col-md-4 borderhome'>
                <h5><CashCoin className='icones'/>MEDIOS DE PAGO</h5>
                 <span>Transferencia bancaria, Mercado Pago, UALA, PagoFacil, RapiPago, BaproPagos, ProvinciaPagos, Ripsa, CobroExpress.</span>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Inicio