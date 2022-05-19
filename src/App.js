import './App.css';
import NavBar from "./componentes/NavBar/NavBar";
import {ItemListContainer} from "./componentes/NavBar/NavBar"
function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
