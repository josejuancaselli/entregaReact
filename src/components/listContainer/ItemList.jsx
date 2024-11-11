import Item from "./Item"


const ItemList = ({ products }) => {
    return (
        <div className="list-container">
            
            
            
            {products.map ((prod) =>{
                return (
                    <Item key={prod.id} product={prod} />
                )
            })}


            
        </div>
    )
}

export default ItemList