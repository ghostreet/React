import {BsCartFill} from "react-icons/bs";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="cart">
            <BsCartFill size={30} />  
        </div>
    )
}

export default CartWidget;