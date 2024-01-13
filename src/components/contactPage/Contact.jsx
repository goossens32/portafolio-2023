import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>¡No dudes en contactarme!</h2>
            <label htmlFor="">Nombre</label>
            <input type="text" required/>
            <label htmlFor="">Apellido</label>
            <input type="text" required />
            <label htmlFor="">Correo electrónico</label>
            <input type="email" />
            <label htmlFor="">Mensaje</label>
            <textarea type="textarea" placeholder="Pon tu mensaje aquí..." required/>
            <div className='btn-contact'>
                <button>Enviar</button>
            </div>
            
        </div>
    )
}

export default Contact;