import { useState } from 'react';
import Button from '../../Buttons/Button.jsx'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => { //función para aumentar la cantidad de productos en carrito
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > initial){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='controls flex justify-center'>
                <Button func={decrement} text={'-'}/>
                <p className='pl-5 pr-5 mt-4'>{quantity}</p>
                <Button func={increment} text={'+'}/>
            </div>
            <div className='flex justify-center'>
                <Button func={() => onAdd(quantity)} disabled= {!stock} text={'Agregar al carrito'}/>
            </div>
        </div>
        
    )
}

export default ItemCount;