import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CartWidget(){

const {cartQuantity} = useContext(CartContext);

    return (
        <div className="cart-widget">
            <Link className="list-link" to="/carrito"><FiShoppingCart className="icon"/></Link>
            <p className="cart-number">{cartQuantity()}</p>
        </div>
    )
}
export default CartWidget;