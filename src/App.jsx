import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { SobreMi } from "./components/SobreMi"
import { Proyectos } from "./components/Proyectos"
import { Skills } from "./components/Skills"
import { Carrera } from "./components/Carrera"
import { Contacto } from "./components/Contacto"
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <>
        <Navbar/>
        <Header/>
        <SobreMi/>
        <Proyectos/>
        <Skills/>
        <Carrera/>
        <Contacto/>
        <Footer/>
        
    </>
  )
}

export default App
