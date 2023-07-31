import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }
        else{
            const encontrado = cart.find((prod) => prod.id === item.id)
            encontrado.quantity += quantity;
            alert('Producto ya agregado, se modificó la cantidad')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    //Con CartContext.Provider como objeto de retorno, se crea el objeto de contexto que recibe los parámetros en value como los declarados
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart}}> 
            {children}
        </CartContext.Provider>
    )
}