import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <div className="introduction">
                <h2>¡Hola! Soy Carlos,</h2>
                <p>
                ¡Bienvenido a mi portafolio! Soy Carlos, un apasionado del desarrollo web que combina creatividad y código para dar vida a experiencias online cautivadoras. A lo largo de mi trayectoria, he convertido líneas de código en sitios web dinámicos y funcionales que no solo cumplen objetivos, sino que también cautivan y sorprenden a los usuarios.
                </p>
            </div>
            <div className="avatar">
                <img src={require(`../img/myAvatar.png`)} alt='' />
            </div>
        </div>
    )
}

export default AboutMe;