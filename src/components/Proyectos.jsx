import { Card } from "./Cards/Card"
export const Proyectos = () => {
    return (
        <>
            <div className="proyectos" id="proyectos">
                <div className="portfolio ">
                    <p className="portfolio saludos-p">📎Portfolio</p>
                </div>
                <div className="pro-title">
                    <h2>Proyectos</h2>
                </div>
                <div className="cards-proyectos">
                    <Card title='Huerta Ya' descripcion='E-commerce de verduras y frutas! (Proyecto integrador en grupo -Digital House)' tecnologia='React' tecnologia2='Node.js' img='huertaya2.jpg' linkgit='https://github.com/MarcoSavarin0/grupo_7_HuertaYa' />
                    <Card title='Harry Potter' descripcion='Utilice la api desde el lado del backend, utilice rutas parametrizadas y filtrados por escuela de magia' tecnologia='EJS' tecnologia2='Node.js' img='hp.jpg' linkgit='https://github.com/MarcoSavarin0/Harry_Potter' />
                    <Card title='To Do List' descripcion='Pequeño proyecto para demostrar mi habilidades en el backend' tecnologia='EJS' tecnologia2='Node.js' img='todolist.png' linkgit='https://github.com/MarcoSavarin0/ToDoList' />
                    <Card title='App web del clima' descripcion='En este proyecto demostre el uso de apis en el frontend' tecnologia='APIS' tecnologia2='Node.js' img='clima.jpg' linkgit='https://github.com/MarcoSavarin0/app-weather' />
                    <Card title='Historias Clinicas' descripcion='Es un proyecto que realice para mi Madre, para que pueda ingresar todos los datos de sus pacientes y poder seguir su historia clinicas' tecnologia='MySql' tecnologia2='Node.js' img='hc1.png' linkgit='https://github.com/MarcoSavarin0/app-weather' />
                    <Card title='DevMinds' descripcion='Emprendimiento/empresa con unos amigos de desarrollo de paginas web, soluciones TI, entre otros servicios' tecnologia='HTML' tecnologia2='CSS' img='devminds.png' linkgit='https://github.com/MarcoSavarin0/app-weather' link='https://devminds.me'/>
                    <Card title='Portfolio' descripcion='Esta pagina web!' tecnologia='React' tecnologia2='Vite' img='portfolio.png' linkgit='https://github.com/MarcoSavarin0/portfolio-vite.git' />
                </div>
            </div>

        </>
    )
}
