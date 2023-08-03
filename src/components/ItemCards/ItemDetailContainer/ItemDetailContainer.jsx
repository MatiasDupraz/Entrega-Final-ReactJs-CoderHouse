import { useEffect, useState } from "react"
import {products as productos, getProductById} from '../../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'

import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {itemId} = useParams()
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(()=> {
                setIsLoading(false);
                resolve(productos)
            }, 500)
        })
        
        promesa.then(result => {
            result = result.filter(product => product.id == itemId)
            setProduct(result) //Se almacena el resultado de la promesa

        })
    }, [])
    
    return(
        <div className="flex justify-center">
            {isLoading ? (<p>Cargando...</p>) : (<ItemDetail {...product[0]}/>)
            }
            
        </div>
    )
}
export default ItemDetailContainer