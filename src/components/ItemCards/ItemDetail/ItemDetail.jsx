import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import LinkButton from '../../Buttons/LinkButton'
import { CartContext } from "../../context/CartContext"
import { CartProvider } from "../../context/CartContext"
export const ItemDetail = ({id, name, codigo, price, category, stock, imgSrc}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,
            name,
            price,
            imgSrc
        }
        addItem(item, quantity)
    }

    return (
        <article className = 'CardItem rounded-md  border w-60 m-5'>
            <header className = 'Header'>
                <h2 className = 'ItemHeader text-xl text-black p-2'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={imgSrc} alt={name} className='ItemImg w-40'/>
            </picture>
            <section>
                <p className = 'Info pl-2'>${price}</p>
                <p className = 'Info pl-2'>Categoría: {category}</p>
            </section>
            <footer className = 'ItemFooter pl-2'>
                {
                    quantityAdded > 0 ? (
                        <div className='flex justify-center'>
                        <LinkButton to= '/cart' text='Carrito'/>
                        </div>
                    ) : (
                        <div className='flex justify-center'>
                        <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)}/>
                        </div>
                    )
                }
                
            </footer>
        </article>
    )
}
