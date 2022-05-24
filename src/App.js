import './App.css';
import NavBar from  "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer titulo={"mi catalogo"}/>
    
    </div>
  );
}

export default App;
