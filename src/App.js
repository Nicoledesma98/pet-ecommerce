import './App.css';
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Inicio from "./pages/Home";
import Contacto from './pages/Contact';
import ComoLlegar from './pages/ComoLlegar';
import Detalle from './pages/Detalle';
import ProductList from './pages/ProductList';
import { CartProvider } from "./context/CartContext"
import Footer from './componentes/Footer/Footer';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/comollegar" element={<ComoLlegar/>}/>
          <Route path="/product" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<Detalle/>}/>
          <Route path="/categoria/:category" element={<ItemListContainer/>}/>
        </Routes>   
        <Footer/>
      </BrowserRouter>
      </CartProvider>
    
            
</div>
  );
}

export default App;
