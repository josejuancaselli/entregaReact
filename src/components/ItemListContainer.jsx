import { useState, useEffect } from "react"

import ItemList from "./listContainer/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        const productosRef =  categoria ? query(collection(db, "products"), where("categoria", "==", categoria)) : collection(db, "products")            
        getDocs(productosRef)
        .then ((resp) =>{
            
            setProducts(
                resp.docs.map((doc)=>{
                    return{...doc.data(), id: doc.id}
                })
            )
        })
    }, [categoria])
    

    return (
        <main>
            <h1>{categoria ? categoria : "Estos son nuestro productos"}</h1>
            <ItemList products={products} />
        </main>
    )
}

export default ItemListContainer



