import { Link } from "react-router-dom";
import Nosotros from "./Nosotros";


function List() {
    return (
        <ul>
            <li className="list">
                <Link className="list-link" to="/">Inicio</Link>
            </li>
            <li className="list">
                <Link className="list-link" to="/productos">Todos nuestros productos</Link>
            </li>
            <li className="list">
                <Link className="list-link" to="/productos/Zapatillas">Zapatillas</Link>
            </li>
            <li className="list">
                <Link className="list-link" to="/productos/Remeras">Remeras</Link>
            </li>
            <li className="list">
                <Link className="list-link" to="/nosotros">Nosotros</Link>
            </li>
        </ul>
    )
}
export default List;