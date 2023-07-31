import Item from '../Item/Item.jsx'
const ItemList = ({products}) => {
    return(
        <div className='ListGroup flex flex-wrap justify-center'>
            {products.map(prod =>   <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList