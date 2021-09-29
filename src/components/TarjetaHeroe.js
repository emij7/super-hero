import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const TarjetaHeroe = (props) => {
    const [verDetalles, setVerDetalles] = useState(false)
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div className='d-flex flex-column align-items-center'>

            <section className='d-flex flex-column border border-3 rounded border-dark p-2 mi-equipo__tarjeta-stats'>
                <h1 className='text-center'>{props.nombre}</h1>
                <div className='mi-equipo__tarjeta-imagen'>
                    <img src={props.imagen} alt="Imagen de Super-heroe" className=' img-fluid w-50 mx-auto rounded' />
                </div>
                <div className='d-flex justify-content-around'>
                    <div className='d-flex flex-column'>
                        <p>Inteligencia:</p>
                        <p>Fuerza:</p>
                        <p>Velocidad:</p>
                        <p>Durabilidad:</p>
                        <p>Poder:</p>
                        <p>Combate: </p>
                    </div>
                    <div className='fw-bold'>
                        <p>{props.estadisticas.intelligence === 'null' ? 'n/a' : props.estadisticas.intelligence}</p>
                        <p>{props.estadisticas.strength === 'null' ? 'n/a' : props.estadisticas.strength}</p>
                        <p>{props.estadisticas.speed === 'null' ? 'n/a' : props.estadisticas.speed}</p>
                        <p>{props.estadisticas.durability === 'null' ? 'n/a' : props.estadisticas.durability}</p>
                        <p>{props.estadisticas.power === 'null' ? 'n/a' : props.estadisticas.power}</p>
                        <p>{props.estadisticas.combat === 'null' ? 'n/a' : props.estadisticas.combat}</p>
                    </div>
                </div>

            </section >
            {/* <button className='btn btn-primary boton w-75 m-1' onClick={() => setVerDetalles(true)} >Mostrar Detalles</button> */}
            <div>
                <button type="button" className="button btn btn-primary m-1 boton" onClick={() => setOpen(o => !o)}>
                    Detalles
                </button>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className="modo">
                        <div className="tarjeta-heroe__detalles bg-dark text-light rounded p-3" >
                            <h1>{props.nombre}</h1>
                            <p>Nombre completo: {props.biografia['full-name']}</p>
                            <p>Peso: {props.apariencia.weight[1]}</p>
                            <p>Altura: {props.apariencia.height[1]}</p>
                            <p>Color de ojos: {props.apariencia['eye-color']}</p>
                            <p>Color de pelo: {props.apariencia['hair-color']}</p>
                            <p>Lugar de Trabajo: {props.lugarTrabajo}</p>
                            Aliases: {props.biografia.aliases.map((alias) => {
                                return <p key={alias}>- {alias}<br /></p>
                            })
                            }
                            <button onClick={closeModal} className='btn btn-dark boton d-block mx-auto' >Cerrar</button >
                        </div >
                    </div>
                </Popup>
            </div>
        </div >
    )
};

export default TarjetaHeroe;