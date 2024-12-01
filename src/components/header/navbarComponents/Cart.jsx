import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {

    const { cart, totalPrice, handleEmpty } = useContext(CartContext);

    return (
        <div>
            <h1>Carrito</h1>
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h2>{prod.nombre} {prod.descripcion}</h2>
                        <img src={prod.img} alt="" />
                        <p>${prod.precio}</p>
                        <p>Cantidad: {prod.quantity}</p>
                    </div>
                ))
            }
            <p>Precio total: ${totalPrice()}</p>
            <button onClick={handleEmpty}>Vaciar</button>
        </div>
    )
}

export default Cart