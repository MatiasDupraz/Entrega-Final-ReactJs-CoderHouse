import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/img/LOGOFICIAL.png'
import LinkButton from '../Buttons/LinkButton'
import {Link} from 'react-router-dom'

const categories = ['Auriculares', 'Webcams', 'Celulares', 'Mouse']
const NavBar = () => {
    return (
        <div className="mx-0 bg-gray-800 rounded-b-xl shadow  p-4 NavBar">
        <nav className='flex'>
            <Link to='/'>
                <img src={logo} alt="logo" className=' h-20 mt--10' />
            </Link>
            <div className="container mx-auto bg-center flex justify-center">
                {categories.map(category => <LinkButton key={category} to={`/category/${category}`} text={category}/>)}
            </div>
            <CartWidget/>
        </nav>
        
    </div>
    )
}

export default NavBar;