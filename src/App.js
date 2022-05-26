import './App.css';
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from './componentes/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      <NavBar />
            <ItemListContainer/>
            <ItemCount/>
            
</div>
  );
}

export default App;
