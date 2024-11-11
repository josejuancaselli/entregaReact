import { FiShoppingCart } from "react-icons/fi";


function CartWidget(){
    return (
        <div className="cart-widget">
            <FiShoppingCart className="icon"/>
            <p className="cart-number">3</p>
        </div>
    )
}
export default CartWidget;