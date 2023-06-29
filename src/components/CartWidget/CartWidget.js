import {BsCartPlusFill} from "react-icons/bs";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="cart">
            <BsCartPlusFill size={40} />
            0
        </div>
    )
}

export default CartWidget;