import { useState, useEffect } from "react"

import ItemList from "./listContainer/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {categoria} = useParams()
    const query = categoria ? `Adidas+${categoria}` : "Adidas";

    useEffect(() => {
        
        
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            .then(response => response.json())
            .then(data => setProducts(data.results))
            
    }, [categoria])
    
    return (
        <main>
            <h1>{categoria ? categoria : "Estos son nuestro productos"}</h1>
            <ItemList products={products} />
        </main>
    )
}

export default ItemListContainer

// https://api.mercadolibre.com/sites/MLA/search?q=zapatillas+Adidas

