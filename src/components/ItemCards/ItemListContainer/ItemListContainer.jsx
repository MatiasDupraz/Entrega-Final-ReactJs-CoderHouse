import { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../../services/firebase/firebaseConfig'
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams();

    useEffect(() => {
        const collectionRef = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId)) : collection(db, 'items')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => console.log(error))

    })

    return(
        <div>
            {categoryId? (<h1 className="text-5xl text-gray-800 font-bold flex justify-center mt-4">{categoryId}</h1>) : (<h1 className="text-5xl text-gray-800 font-bold flex justify-center mt-4">{greeting}</h1>)}
            {products.length === 0 ? <div className="flex justify-center mt-10">Cargando...</div> : <ItemList products={products}/>}
            
        </div>
    )
}
export default ItemListContainer