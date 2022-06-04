import React from "react"

const MyWork = () => {

    return (
        <div className="myWork">
            <div className="projects-grid">
                <button className="project" onClick={()=> {
                    window.open("https://lab6.anapaolapaola1.repl.co")
                }}>Juego de Memoria</button>
                <button className="project" onClick={()=> {
                    window.open("https://lab7.anapaolapaola1.repl.co")
                }}>Laberinto</button>
                <button className="project" onClick={()=> {
                    window.open("https://lab8.anapaolapaola1.repl.co")
                }}>Calculadora</button>
                <button className="project" onClick={()=> {
                    window.open("https://the-young-jerks.anapaolapaola1.repl.co")
                }}>Réplica de página web</button>
            </div>
            <h1 className="projects">MIS PROYECTOS</h1>
        </div>
    )

}

export default MyWork