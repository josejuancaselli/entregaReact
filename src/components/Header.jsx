import NavBar from "./header/NavBar"
import Title from "./header/Title"


const Header = () => {
    return (
        <header className="header">
            <Title/>
            <NavBar />
        </header>
    )
}

export default Header