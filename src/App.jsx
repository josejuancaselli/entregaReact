import Header from "./components/Header"
import Nosotros from "./components/header/navbarComponents/Nosotros"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/listContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./components/Inicio"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/header/navbarComponents/Cart"




function App() {


  return (
    <div>

      
        <BrowserRouter>
        <CartProvider>
          
          <Header />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
      
    </div>


  )
}

export default App
