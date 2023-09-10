export const Header = () => {
    return (
        <header className="h-home">
            <div className="presentacion-nombre-home">
                <div className="saludos-child-nombre">
                    <p className="saludos-p">
                        👋 Saludos
                    </p>
                    <br />
                    <h2 className="h2-nombre">
                        Marco
                        <br />
                        Savarino
                    </h2>
                    <p className="description-job">
                        Full Stack Developer · Node.js
                    </p>
                    <div className="red-sociales">
                        <a href="https://www.linkedin.com/in/marco-agustín-savarino/" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://github.com/MarcoSavarin0" target="__blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div className="presentacion-imagen-home">
                <img src="avatar3.png"/>
            </div>
            <div className="presentacion-cv-home">
                <div className="boton-cv">
                    <a href="https://drive.google.com/file/d/1LNQJiAlNVW06Q9mSH2dgADsf_GvbQcKJ/view?usp=sharing" target="__blank">CV<i className="fa-solid fa-arrow-down"></i></a>
                </div>
            </div>
        </header>
    )
}
