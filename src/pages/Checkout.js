//import { useContext } from "react"
//import { CartContext } from "../components/context/CartContext"
//import { useState } from "react"
//import { Timestamp, writeBatch } from "firebase/firestore"
//import CheckOutForm from '../components/forms/CheckOutForm.jsx'
const Checkout = () => {
//    const [loading, setLoading] = useState(false)
//    const [orderId, setOrderId] = useState('')

//    const {cart, total, clearCart} = useContext(CartContext)

    
    return (
        <div>
            <h1 className='text-5xl text-gray-800 font-bold mt-4 flex justify-center'>Checkout</h1>
            
            <form>
                <label>Nombre</label>
                <input type='text' name='name'></input>
            </form>
        </div>
    )
}
export default Checkout