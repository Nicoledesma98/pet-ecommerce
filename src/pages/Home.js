import React from 'react';
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"

const Inicio = () => {
    
    return (
        <div>
            <div className='mt-5'>
           <h1>Bienvenidos a PetSociety</h1>
           <h6 className='mt-4 '>Aquí encontrarás los mejores y más lindos accesorios para mascotas</h6>
        </div>
        <ItemListContainer title={"Productos recomendados"}/>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-4 borderhome'>
                    <h5>ENVÍOS A TODO EL PAÍS</h5>
                    <span>Si tu compra supera los $3500.- enviamos GRATIS a la sucursal de Correo Argentino de tu ciudad.</span>
                </div>
                <div className='col-md-4 borderhome'>
                    <h5>SITIO SEGURO</h5>
                    <span>Protegemos tus datos</span>
                </div>
                <div className='col-md-4 borderhome'>
                <h5>MEDIOS DE PAGO</h5>
                 <span>Transferencia bancaria, Mercado Pago, UALA, PagoFacil, RapiPago, BaproPagos, ProvinciaPagos, Ripsa, CobroExpress.</span>
                </div>
            </div>

        </div>
        </div>
        
    )
}
export default Inicio