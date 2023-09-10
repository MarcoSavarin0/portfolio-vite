export const Navbar = () => {
    return (
        <>
            <div className="navbar " id="home">
                <div className="logo-nav">
                   <p>{ "< Marco Savarino />"}</p> 
                </div>
                <div className="items-nav">
                    <ul className="list-ul ">
                        <a href="#home"><li className="list-li">Home</li></a>
                        <a href="#sobremi"><li className="list-li">Sobre Mi</li></a>
                        <a href="#proyectos"><li className="list-li">Portfolio</li></a>
                        <a href="#skills"><li className="list-li">Skills</li></a>
                        <a href="#carrera"><li className="list-li">Carrera</li></a>
                        <a href="#contacto"><li className="list-li">Contacto</li></a>

                    </ul>
                </div>

            </div>

        </>
    )
}
