import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import  productos from "../../utils/productsMock"
import { useParams } from "react-router-dom"

const ItemDetailConntainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    // const getItem = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(dproduct)
    //         }, 2000);

    //     })
    // }

    useEffect(() => {
        // getItem()
        //     .then((res) => {
        //         console.log("respuesta getitem :", res)
        //         setItem(res)
        //     })

        setItem(productFilter)
    }, [id])

    const productFilter =  productos.find ((product) =>{
        return product.id == id
    })

    return (
        <div>
            <ItemDetail data={item} />
        </div>

    )
}

export default ItemDetailConntainer