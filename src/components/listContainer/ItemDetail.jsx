

const ItemDetail = ({ productId }) => {
    
    return (
        <div>
            <img src={productId.thumbnail} alt="" />
            <h2>{productId.title}</h2>
            <p>Precio: ${productId.price}</p>
            <button>Anadir al Carrito</button>

        </div>
    )
}

export default ItemDetail