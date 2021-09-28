import React, { useState } from 'react';


const TarjetaHeroe = (props) => {
    const [verDetalles, setVerDetalles] = useState(false)
    return (
        <div>
            <h1>{props.nombre}</h1>
            <img src={props.imagen} alt="" />
            <label htmlFor="valor1">Inteligencia</label>
            <meter id="valor1" min="0" max="100" low="30" high="60" optimum="75" value={props.estadisticas.intelligence}></meter>
            <label htmlFor="valor2">Fuerza</label>
            <meter id="valor2" min="0" max="100" low="30" high="60" optimum="75" value={props.estadisticas.strength}></meter>
            <label htmlFor="valor3">Velocidad</label>
            <meter id="valor3" min="0" max="100" low="30" high="60" optimum="75" value={props.estadisticas.speed}></meter>
            <label htmlFor="valor4">Durabilidad</label>
            <meter id="valor4" min="0" max="100" low="30" high="60" optimum="75" value={props.estadisticas.durability}></meter>
            <label htmlFor="valor5">Poder</label>
            <meter id="valor5" min="0" max="100" low="30" high="60" optimum="75" value={props.estadisticas.power}></meter>
            <label htmlFor="valor6">Combate</label>
            <meter id="valor6" min="0" max="100" low="30" high="60" optimum="75" value={props.estadisticas.combat}></meter>
            {verDetalles ? (
                <div className="tarjeta-heroe__detalles">
                    <p>Nombre completo: {props.biografia['full-name']}</p>
                    <p>Peso: {props.apariencia.weight[1]}</p>
                    <p>Altura: {props.apariencia.height[1]}</p>
                    <p>Color de ojos: {props.apariencia['eye-color']}</p>
                    <p>Color de pelo: {props.apariencia['hair-color']}</p>
                    <p>Lugar de Trabajo: {props.lugarTrabajo}</p>
                    Aliases : {props.biografia.aliases.map((alias) => {
                        return <p key={alias}>{alias}<br /></p>
                    })
                    }
                    <button onClick={() => setVerDetalles(false)}>Ocultar Detalles</button>
                </div>
            )
                : <button onClick={() => setVerDetalles(true)}>Mostrar Detalles</button>}
        </div>
    )
};

export default TarjetaHeroe;