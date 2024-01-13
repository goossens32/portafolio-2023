import './styles/Header.css';
const Header = () => {
    return (
        <div>
            <header>

                <h1>PORTAFOLIO</h1>

                <nav>
                    <a href="/">Inicio</a>
                    <a href="/#projects">Proyectos realizados</a>
                    <a href="/#studies">Mis estudios</a>
                    <a href="/contact" id='btn-contact'>Contacto</a>
                </nav>
            </header>
        </div>
    )
}

export default Header;