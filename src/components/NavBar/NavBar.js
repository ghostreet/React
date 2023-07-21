import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


const NavBar = ()=> {
    return (
        <header className="flex justify.between">
             <h3 className="titulo">XTech</h3>    
        <nav>
        
            <NavLink to="/">Home</NavLink>   
            <NavLink to="/categoria/telefonia">Telefonía</NavLink> 
            <NavLink to="/categoria/electronica">Electronica</NavLink> 
            <NavLink to="/categoria/computacion">Computación</NavLink>       
            <NavLink to="/carrito">
                <CartWidget/> 
            </NavLink>   
        </nav>
        </header>
    )
};

export default NavBar;