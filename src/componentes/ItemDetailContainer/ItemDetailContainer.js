import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { dproduct } from "../../utils/productsMock"
const ItemDetailConntainer = () => {
    const [item, setItem] = useState({})
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dproduct)
            }, 2000);

        })
    }

    useEffect(() => {
        getItem()
            .then((res) => {
                console.log("respuesta getitem :", res)
                setItem(res)
            })
    }, [])


    return (
        <>
            <div>contenedor item</div>
            <ItemDetail data={item} />
        </>

    )
}

export default ItemDetailConntainer