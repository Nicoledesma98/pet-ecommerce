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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/comollegar" element={<ComoLlegar/>}/>
          <Route path="/product" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<Detalle/>}/>
          <Route path="/categorias/:category" element={<ProductList/>}/>
        </Routes>        
      </BrowserRouter>
    
            
</div>
  );
}

export default App;
