import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(carritoInicial)

    const handleCart = (item, quantity) => {
        const itemAdded = { ...item, quantity: quantity };
        const newCart = [...cart]
        const inCart = newCart.find((item) => item.id === itemAdded.id)

        if (inCart) {

            inCart.quantity += quantity;

        } else {
            newCart.push(itemAdded)

        }
        setCart(newCart)
        
    };

    const cartQuantity = (() => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)

    })

    const totalPrice = (() => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0)
    })

    const handleEmpty = (() => {
        setCart([])
    })

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{
            cart,
            handleCart,
            cartQuantity,
            totalPrice,
            handleEmpty
        }}>
            {children}
        </CartContext.Provider>
    )
}