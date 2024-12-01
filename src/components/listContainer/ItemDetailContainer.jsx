import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = ({}) => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {

        getDoc(doc (db, "products", id)) 
            .then ((querySnapshot) =>{
                const prod = {...querySnapshot.data(), id: querySnapshot.id}
                setProduct(prod)
            })

    }, [id])

    return (
        <div>
            <ItemDetail item={product} />
        </div>
    )
}

export default ItemDetailContainer