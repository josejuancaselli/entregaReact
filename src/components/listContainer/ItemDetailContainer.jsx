import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    
    
    

    useEffect(()=>{
        
        fetch (`https://api.mercadolibre.com/items/${id}`)
        .then (response => response.json())
        .then(data => setProduct(data)) 
        
        
    }, [id])

    
    return (
        <div>
            <ItemDetail productId = {product}/>
        </div>
    )
}

export default ItemDetailContainer