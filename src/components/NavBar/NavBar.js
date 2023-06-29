import { BsJustify } from "react-icons/bs";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
            <h3 className="titulo">XTech</h3>
            <button>Telefonía</button>
            <button>Electronica</button>
            <button>Computación</button>
            </div>
           <CartWidget/>
        </nav>
    )
};

export default NavBar;