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

    const totalQuantity = () => {
        let totalQ = 0
        if(cart.lenght !== 0){
            cart.forEach(element => totalQ += element.quantity)
        }
        return totalQ
    }

    const total = () => {
        let total = 0
        if(cart.lenght !== 0){
            cart.forEach(element => total += element.price * element.quantity)
        }
        return total
    }
    //Con CartContext.Provider como objeto de retorno, se crea el objeto de contexto que recibe los parámetros en value como los declarados
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, totalQuantity, total}}> 
            {children}
        </CartContext.Provider>
    )
}