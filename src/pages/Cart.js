import CartContext from "../context/CartContext"
import { useContext } from "react"
import { Trash } from "react-bootstrap-icons"

const Cart = () => {
  const { cartListItems, totalPrice } = useContext(CartContext)
  console.log("cartilistitems desde checkout", cartListItems)
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
    </div>

  )
}


export default Cart