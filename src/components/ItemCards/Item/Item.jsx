import LinkButton from '../../Buttons/LinkButton'
const Item = ({id, name, codigo, price, category, stock, imgSrc}) => {
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
                <p className = 'Info pl-2'>Disponibles: {stock}</p>
            </section>
            <footer className = 'ItemFooter pl-2 pt-auto'>
                <LinkButton to={`/item/${id}`} text='Ver Detalle'/>
            </footer>
        </article>
    )
}
export default Item