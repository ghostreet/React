import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import Productos from './components/pages/Productos'
import Categorias from './components/pages/Categorias'
import ItemCount from "./components/ItemCount/ItemCount";
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react";

function App() {

  return (
    <ChakraProvider>
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
        <ItemListContainer/>
        <Box as="section" bg="blue.400" w="150px" h="150px">
        <ItemCount initial={1} stock={7} onAdd={(quantity)=> console.log("Cantidad agregada",quantity)}/>
        </Box>

        
        </main>
    </BrowserRouter>
    </ChakraProvider>
    );  
}

   
  

export default App;
