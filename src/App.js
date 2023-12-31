import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemCards/ItemDetailContainer/ItemDetailContainer.jsx'
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import Checkout from './pages/Checkout.js'
import Cart from './pages/Cart';
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/category/:categoryId' element={<HomePage/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>Error 404: Not Found.</h1>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
