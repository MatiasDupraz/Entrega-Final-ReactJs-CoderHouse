import { useContext } from "react";
import Button from "../Buttons/Button"
import { CartContext } from '../context/CartContext';


//<div className="flex justify-end"><Button text='X' func={removeItem(id)}/></div>

const Item = ({id, name, price, imgSrc, quantity}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <article className = 'CardItem rounded-md  border w-60 m-5'>
            <header className = 'Header'>
            <picture>
                <img src={imgSrc} alt={name} className='ItemImg w-40'/>
            </picture>
            
                <h2 className = 'ItemHeader text-xl text-black p-2'>
                    {name}
                </h2>
            </header>
            <section>
                <p className = 'Info pl-2'>${price}</p>
                <p className = 'Info pl-2 mb-2'>Cantidad: {quantity}</p>
                
                <hr/>
                <section className="bg-slate-300">
                <p className = 'Info font-bold pl-2 pt-1 pb-1'>Subtotal: ${quantity*price}</p>
                </section>
                
            </section>
        </article>
    )
}
export default Item