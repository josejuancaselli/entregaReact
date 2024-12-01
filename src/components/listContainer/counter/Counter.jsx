
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const Counter = ({ quantity, handleSub , handleAdd, handleCart }) => {


    
    return (
        <div>
            <div>
                <button onClick={handleSub}>-</button>
                <p>{quantity}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <button onClick={handleCart}>Agregar al Carrito</button>
        </div>
    )
}

export default Counter