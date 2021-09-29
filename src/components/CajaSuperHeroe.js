import React, { useState } from 'react';
import agregarAEquipo from './agreagarAEquipo';
import quitarDeEquipo from './quitarDeEquipo';

const CajaSuperHeroe = (props) => {
    const [agregado, setagregado] = useState()
    const manejoClickAnadir = () => {
        agregarAEquipo(props.id, props.bando, props.usuario)
        if ((localStorage.getItem(`${props.usuario}`).search(`"${props.id}"`) !== -1)) {
            setagregado(true)
        }
    }
    const manejoClickQuitar = () => {
        quitarDeEquipo(props.id, props.bando, props.usuario)
        if ((localStorage.getItem(`${props.usuario}`).search(`"${props.id}"`) === -1)) {
            setagregado(false)
        }
    }
    return (
        <div className='col-md-5 d-flex flex-row align-items-center border border-3 rounded border-success p-1 justify-content-between m-1 ' style={{ maxWidth: '90vw' }}>
            <div style={{ height: '25vh' }} className='align-middle'>
                <img src={props.imagen} alt="Imágen Super-heroe" className='img-fluid h-100 ' />
            </div>
            <p className='fw-bold'>{props.nombre}</p>
            {(localStorage.getItem(`${props.usuario}`).search(`"${props.id}"`) === -1) ?
                <button className='btn btn-success' onClick={() => manejoClickAnadir()}>Agregar</button>
                : <button className=" btn btn-danger" onClick={() => manejoClickQuitar()}>Quitar</button>
            }
        </div>
    );
};

export default CajaSuperHeroe;