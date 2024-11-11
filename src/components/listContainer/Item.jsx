import { Link } from "react-router-dom";


function Item({ product }) {
    return (

        <div key={product.id} className="card">
            <img src={product.thumbnail} alt="" />
            <h2>{product.title}</h2>
            <p>Precio: ${product.price}</p>
            <button>Anadir al Carrito</button>
            <button><Link to={`/item/${product.id}`}>Ver más</Link></button>
        </div>

    )
}

export default Item;