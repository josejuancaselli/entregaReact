


import CartWidget from "./NavBarComponents/CartWidget";
import List from "./navbarComponents/List";



function NavBar(){
    return(
        <nav className="navbar">
            
            <List/>
            <CartWidget />
            
        </nav>
    )
}
export default  NavBar;