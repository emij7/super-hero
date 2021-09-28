import React from 'react';

const CajaEstadisticas = (props) => {
    return (
        <div>
            <p>inteligencia: {props.int[0]}</p>
            <p>fuerza: {props.str[0]}</p>
            <p>sumaVelocidad: {props.vel[0]}</p>
            <p>durabilidad: {props.dur[0]}</p>
            <p>poder: {props.pow[0]}</p>
            <p>combate: {props.com[0]}</p>
            <p>peso promedio: {props.peso} Kg</p>
            <p>altura promedio:  {props.altura} Cms</p>
        </div>
    );
};

export default CajaEstadisticas;