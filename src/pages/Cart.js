import { useContext } from "react"
import { CartContext } from "../components/context/CartContext"
import LinkButton from "../components/Buttons/LinkButton"
import Button from "../components/Buttons/Button"
import CartItem from "../components/Cart/CartItem.jsx"
const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext) //Usa el contexto para crear el carrito
    if(totalQuantity === 0){
        return(
            <div className='flex'>
            <h1>No hay items en el carrito</h1>
            <LinkButton to='/' text='Regresar a Home'/>
            </div>
        )
    }
    return (
        <div>
            { cart.map(item => <CartItem key={item.id} {...item}/>) }
            <h1>Total: ${total}</h1>
            <Button func={() => clearCart()} text='Limpiar Carrito'/>
            <LinkButton to='/checkout' text='Abonar Compra'/>
        </div>
    )
}

export default Cart

