


import CartWidget from "./NavBarComponents/CartWidget";
import { Link } from "react-router-dom";



function NavBar(){
    return(
        <nav className="navbar">
        <ul>
            <li className="list">
                <Link className="list-link" to="/">Inicio</Link>
            </li>
            <li className="list">
                <Link className="list-link" to="/productos/Zapatillas">Zapatillas</Link>
            </li>
            <li className="list">
                <Link className="list-link" to="/productos/Remeras">Remeras</Link>
            </li>
            <li className="list">
                <Link className="list-link" to="/productos/Buzos">Buzos</Link>
            </li>
            <li className="list">
                <Link className="list-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="list"><CartWidget/></li>
        </ul>
        </nav>
    )
}
export default  NavBar;