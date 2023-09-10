
export const Contacto = () => {
    return (
        <>
            <section id="contacto" className="py-5 text-light contactoSection">
                <div className="container">
                    <h2 className="section-title mb-5">Contáctame</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <form
                                action="https://formspree.io/f/xgebrvpy"
                                method="POST"
                            >
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Mensaje
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        name="message"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Enviar
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <p>¡Contáctame para trabajar juntos en tu próximo proyecto!</p>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fa-solid fa-location-dot"></i> Santa Fe, Argentina
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    savarinomarco50@gmail.com
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone"></i> +54 342-472-2458
                                </li>
                                <li>
                                    <i className="fa-brands fa-github"></i>
                                    <a
                                        href="https://github.com/MarcoSavarin0"
                                        className=" a"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <i className="fa-brands fa-linkedin"></i>
                                    <a
                                        href="https://linkedin.com/in/tuusuario"
                                        className=" a"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
