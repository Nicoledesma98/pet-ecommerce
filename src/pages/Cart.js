import CartContext from "../context/CartContext"
import { useContext, useState } from "react"
import { Trash } from "react-bootstrap-icons"
import { Modal, Button } from "react-bootstrap"
import { InputGroup, FormControl } from "react-bootstrap"
import { addDoc, collection } from "firebase/firestore"
import db from "../utils/firebaseConfig"
import { Link } from "react-router-dom"
const Cart = () => {
  const { cartListItems, totalPrice,clearCart} = useContext(CartContext)
  const [formValue,setFormValue] = useState({
     nombre : " ",
     email : " ",
     direccion : " ",
     telefono : " "
  })

  const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map((item)=>{
      return {
        id : item.id,
        title : item.title,
        price : item.price
      }
    }),
    total: totalPrice
  })
  
  const [success,setSuccess] = useState()
  
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    setOrder({...order, buyer : formValue})
    saveData({...order, buyer : formValue})
  }
  const handleChange = (e) =>{
    setFormValue({...formValue,[e.target.name] : e.target.value})
    
  }
  const saveData = async (newOrder) =>{
    const orderFirebase = collection(db,"ordenes")
    const orderDoc = await addDoc(orderFirebase,newOrder)
    console.log("orden generada:",orderDoc.id)
    setSuccess(orderDoc.id)
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="container-fluid marginb">
      <div className="table-responsive">
        <h1>Checkout:</h1>
        <div className="mt-5">
          <table className="table table-sm bordertable">
            <thead>
              <tr >
                <th scope="col"><h2>Productos:</h2></th>
                <th scope="col"><h2>Nombre:</h2></th>
                <th scope="col"><h2>Cantidad:</h2></th>
                <th scope="col"><h2>precio:</h2></th>
                <th scope="col"></th>
              </tr>
            </thead>
            {cartListItems.map((item) => {
              const { id, image, price, title } = item
              return (
                <tbody className="bordertable">
                  <tr key={id}>
                    <th scope="row" ><img src={image} alt="imagen del producto" style={{ width: '5rem' }} /></th>
                    <td>{title}</td>
                    <td>1</td>
                    <td>${price}</td>
                    <td><button className="bgbutton p-4"><Trash className="bgtransparent" /></button></td>
                  </tr>

                </tbody>
              )
            })}
            <tr className="bordertable">
              <th scope="row"></th>
              <td><h5 className="text-end">Subtotal: ${totalPrice}</h5></td>
            </tr>
            <tr className="bordertable">
              <th scope="row"></th>
              <td><h3 className="text-end">Total:</h3></td>
            </tr>

          </table>
        </div>
      </div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Listo!
        </Button>



        <Modal show={show} onHide={handleClose} animation={true} className="modalback">

          <Modal.Header closeButton>
            <Modal.Title>{(success) ? "operacion generada con exito" : ("Datos del comprador")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {(success) ? (
              <div>
                la orden se genero con exito!
                numero de orden:{success}
                <button onClick={clearCart}>
                   <Link to={"/"} className="nav-link active bgnavbar">Volver al inicio</Link>
                </button>
               
              </div>
              
            ):( <form onSubmit={handleSubmit}>
              <InputGroup size="sm" className="mb-3">Nombre y Apellido
                <FormControl aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={formValue.nombre} 
                name="nombre"
                autoFocus
                onChange={handleChange}
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">Email:
                <FormControl aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                value={formValue.email}
                name="email"
                onChange={handleChange}
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">Direccion:
                <FormControl aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={formValue.direccion}
                name="direccion" 
                onChange={handleChange}
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">Telefono:
                <FormControl aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={formValue.telefono}
                name="telefono" 
                onChange={handleChange}
                />
              </InputGroup>
              <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
              <button type="submit">Enviar!</button>
            </form>)
          }
            
            
          </Modal.Body>
        </Modal>

      </>
    </div>

  )
}


export default Cart