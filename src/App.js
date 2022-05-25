import './App.css';
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Cards from './componentes/Card/Cards';
function App() {
  return (
    <div className="App">
      <NavBar />
            <ItemListContainer titulo={"mi catalogo"} />
            <Cards/>
</div>
  );
}

export default App;
