import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../utils/firebaseConfig"

const ItemDetailConntainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})

    

    useEffect(() => {
    //    getProduct()
    }, [id])

    // const getProduct = async() =>{
    //     const docRef = doc(dBase, "productos",id)
    //     const docSnaptshop = await
    // }
    
    // const productFilter =  productos.find ((product) =>{
    //     return product.id == id
    // })

    return (
        <div>
            <ItemDetail data={item} />
        </div>

    )
}

export default ItemDetailConntainer