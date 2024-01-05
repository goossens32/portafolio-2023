import './styles/Projects.css';

const Projects = () => {
    return (
        <div className='projects-container' id='projects'>
            <h2>Proyectos realizados</h2>
            <div className='projects-list'>
                <div className='project-item'>
                    <div className='project-logo'>
                        <img src={require(`../img/logo-botchat.png`)} alt='' />
                    </div>
                    <div className='project-info'>
                        <p>Plataforma para contratar un Botchat para pequeña o medianas empresas en la que, permite automatizar mensajes de soporte. Soporte Instantáneo: Proporciona asistencia a tus clientes las 24 horas del día, los 7 días de la semana.</p>
                        <h4>Tecnologías utilizadas</h4>
                        <div className='see-more-container'>
                            <div className='technology'>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                                <i class="fa-brands fa-js"></i>
                                <i class="fa-brands fa-react"></i>
                            </div>
                            <div className='btn-see-more'>
                                 <a href="https://cgp00-botchat.netlify.app/" target="_blank" rel='noreferrer'><button>VER MÁS</button></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='project-item'>
                    <div className='project-logo' id='mallorcar-logo'>
                        <img src={require(`../img/logo-mallorcar.png`)} alt='' />
                    </div>
                    <div className='project-info'>
                        <p>Página web destinada a la compraventa de vehículos de ocasión y segunda mano. Permite ver el listado de vehículos a la venta y contactar con el vendedor para su posterior compra. Esta página web ya és dinámica utilizando PHP.</p>
                        <h4>Tecnologías utilizadas</h4>
                        <div className='see-more-container'>
                            <div className='technology'>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                                <i class="fa-brands fa-js"></i>
                                <i class="fa-brands fa-react"></i>
                            </div>
                            <div className='btn-see-more'>
                                 <a href="https://mallorcar-cgp00.netlify.app/" target="_blank" rel='noreferrer'><button>VER MÁS</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className='project-logo' id='mallorcar-logo'>
                        <img src={require(`../img/logo-mediamarkt.png`)} alt='' />
                    </div>
                    <div className='project-info'>
                        <p>Proyecto en conjunto con la tienda online de Media-Markt, mi parte era desarrollar el diseño de las cards para cada item en venta junto con la funcionalidad para añadir al carrito. Un trabajo laborioso y uno de los primeros en mi carrera profesional</p>
                        <h4>Tecnologías utilizadas</h4>
                        <div className='see-more-container'>
                            <div className='technology'>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                                <i class="fa-brands fa-js"></i>
                                <i class="fa-brands fa-react"></i>
                            </div>
                            <div className='btn-see-more'>
                                 <a href="https://mediamarkt-cgp00.netlify.app/" target="_blank" rel='noreferrer'><button>VER MÁS</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-item'>
                    <div className='project-logo' id='amazon-logo'>
                        <img src={require(`../img/logo-amazonprime.png`)} alt='' />
                    </div>
                    <div className='project-info'>
                        <p>Parte de mi actual trabajo en Amazon. Junto con mis compañeros mi trabajo consiste mantener la página web de Amazon Prime Video junto con añadir las nuevas películas/series y sus </p>
                        <h4>Tecnologías utilizadas</h4>
                        <div className='see-more-container'>
                            <div className='technology'>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                                <i class="fa-brands fa-js"></i>
                                <i class="fa-brands fa-react"></i>
                            </div>
                            <div className='btn-see-more'>
                                 <a href="https://cgp00-primevideo.netlify.app/" target="_blank" rel='noreferrer'><button>VER MÁS</button></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='btn-see-studies'>
                    <a href="#studies"><button>MIS ESTUDIOS</button></a>
            </div>
        </div>
    )
}

export default Projects;