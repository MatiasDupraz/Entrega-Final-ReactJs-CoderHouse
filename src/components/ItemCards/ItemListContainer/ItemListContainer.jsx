import { useEffect, useState } from "react"
import {products as productos} from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom"
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams();
    
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(productos)
            }, 800)
        })
        promise.then(result => {
            if(categoryId){
                setProducts(result.filter(product => product.category === categoryId)) //Se almacena el resultado de la promesa
            }
            else{
                setProducts(result) //Se almacena el resultado de la promesa
            }
            
        })
    }, [categoryId])

    return(
        <div>
            {categoryId? (<h1 className="text-5xl text-gray-800 font-bold flex justify-center mt-4">{categoryId}</h1>) : (<h1 className="text-5xl text-gray-800 font-bold flex justify-center mt-4">{greeting}</h1>)}
            {products.length === 0 ? <div className="flex justify-center mt-10">Cargando...</div> : <ItemList products={products}/>}
            
        </div>
    )
}
export default ItemListContainer