import CartWidget from "../cartwidget/cartwidget"

const NavBar = ({ handleCategoria }) => {

    const cambiarCategoria = (categoria) => {
        handleCategoria(categoria)
    }

    return (
        <nav>
            <h1 onClick={() => cambiarCategoria ('todos')}>Liluna Essen</h1>
            <p onClick={() => cambiarCategoria ('electronics')}>Electrónica</p>
            <p onClick={() => cambiarCategoria ('jewelery')}>Joyeria</p>
            <CartWidget />
        </nav>
    )
}

export default NavBar