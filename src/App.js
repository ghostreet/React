import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import Productos from './components/pages/Productos'
import Categorias from './components/pages/Categorias'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <main> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/categoria/:id" element={<Categorias/>}/>
          <Route path="/carrito" element={<p>pagina del carrito</p>}/>
          <Route path="*" element={<p>pagina no existe</p>}/>
        </Routes>
        </main>
    </BrowserRouter>
    );  
}

export default App;
