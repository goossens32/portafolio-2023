import './styles/Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <p>Diseñado y creado por Carlos David Goossens &copy;2023</p>
            </div>
            <div>
                <a href="https://github.com/goossens32?tab=repositories" target='__blank'><i class="fa-brands fa-github"></i></a>
            </div>
            <div className='newsletter-container'>
                <p>Suscríbete a mi newsletter</p>
                <div>
                    <input type="email" placeholder='Introduce tu email'/>
                    <button><i class="fa-solid fa-paper-plane"></i></button>
                </div>
                
            </div>
        </div>
    )
    
}

export default Footer;