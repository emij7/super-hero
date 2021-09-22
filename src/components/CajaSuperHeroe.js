import React from 'react';
import agregarAEquipo from './agreagarAEquipo';

const CajaSuperHeroe = (props) => {

    return (
        <div>
            <p>{props.nombre}</p>
            <img src={props.imagen} alt="Imágen Super-heroe" />
            <p>{props.bando}</p>
            <button onClick={agregarAEquipo(props.id)}>Agregar</button>
        </div>
    );
};

export default CajaSuperHeroe;