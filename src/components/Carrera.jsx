import { Profesional } from "./Profesional/Profesional"
import { Academica } from "./Academica/Academica";
import { useState } from "react";
export const Carrera = () => {
const [contenido, setContenido] = useState(false)
const showProfesional = () => {
    setContenido(true)
}
const showAcademica = () => {
    setContenido(false)
}

    return (
        <>
            <div className="carrera-div" id="carrera">
                <div className="presentacion-carrera">
                    <p className="carrera-pop saludos-p">💼 Carrera</p>
                    <h2 className="h2-trayectoria">Trayectoria</h2>
                </div>
                <div className="seccion-carrera">
                    <div className="profesional-Academica">
                        <button 
                        type="button"  
                        className={`boton-profesional ${contenido ? '' : 'activo'}`} 
                        onClick={showProfesional}
                        ><h3>Profesional</h3>
                        </button>
                        <button 
                        type="button" 
                        className={`boton-academica ${contenido ? 'activo' : ''}`}
                         onClick={showAcademica}
                         >
                        <h3>Academica</h3>
                        </button>
                    </div>
                    <div className="contenido-carrera">
                        {
                            contenido ? (<Profesional></Profesional>) : (<Academica></Academica>)
                        }
                    
                    </div>
                </div>
            </div>
        </>
    )
}
