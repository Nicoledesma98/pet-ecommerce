import './App.css';
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Inicio from "./pages/Home";
import Contacto from './pages/Contact';
import ComoLlegar from './pages/ComoLlegar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/comollegar" element={<ComoLlegar/>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
        </Routes>
            
      </BrowserRouter>
    
            
</div>
  );
}

export default App;
