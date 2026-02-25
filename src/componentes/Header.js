import './Headers.css'

function Header(){
    return(
        <header className="header">
            {/* AREA DA LOGO E DO NOME DA LOJA*/}
            <div className="logo "></div>
            <h1>Loja 3d</h1>

            {/* AREA DO MENU DE NAVEGAÇÂO*/}
            <nav className="menu_header">
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Contato</a>
                <a href="">Sobre</a>
            </nav>
        </header>

    )
}

export default Header;