import { Link } from "react-router-dom";


function Item({ product }) {
    return (

        <div key={product.id} className="card">
            <img src={product.img} alt="" />
            <h2>{product.nombre} {product.descripcion}</h2>
            <p>Precio: ${product.precio}</p>
            <button><Link to={`/item/${product.id}`}>Ver más</Link></button>
        </div>

    )
}

export default Item;