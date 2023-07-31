import { useContext } from "react"
import { CartContext } from "../components/context/CartContext"
import LinkButton from "../components/Buttons/LinkButton"
import Button from "../components/Buttons/Button"
import CartItem from "../components/Cart/CartItem.jsx"
const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext) //Usa el contexto para crear el carrito
    if(totalQuantity() === 0){
        return(
            <div className=''>
                <h1 className="text-5xl text-gray-800 font-bold mt-4 flex justify-center">No hay items en el carrito</h1>
                <div className='flex justify-center'>
                    <LinkButton  to='/' text='Regresar a Home'/>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                { cart.map(item => <CartItem key={item.id} {...item}/>) }
                <h1>Total: ${total}</h1>
                <Button func={() => clearCart()} text='Limpiar Carrito'/>
                <LinkButton to='/checkout' text='Abonar Compra'/>
            </div>
        )
    }
}

export default Cart

