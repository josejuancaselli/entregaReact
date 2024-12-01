
import Counter from "./counter/Counter"
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {

    const { handleCart } = useContext(CartContext);
    
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }
    const handleSub = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }


    return (
        <div>
            <img src={item.img} alt="" />
            <h2>{item.nombre}</h2>
            <p>Precio: ${item.precio}</p>
            <Counter
                quantity={quantity}
                handleAdd={handleAdd}
                handleSub={handleSub}
                handleCart={() => { handleCart(item, quantity) }}
            />
        </div>
    )
}

export default ItemDetail