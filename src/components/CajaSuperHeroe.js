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
        setagregado(false)
    }
    return (
        <div>
            <p>{props.nombre}</p>
            <img src={props.imagen} alt="Imágen Super-heroe" />
            <p>{props.bando}</p>
            {(localStorage.getItem(`${props.usuario}`).search(`"${props.id}"`) === -1) ?
                <button onClick={() => manejoClickAnadir()}>Agregar</button>
                : <button onClick={() => manejoClickQuitar()}>Quitar</button>
            }
        </div>
    );
};

export default CajaSuperHeroe;