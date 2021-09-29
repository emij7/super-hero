import React from 'react';

const CajaEstadisticas = (props) => {
    return (
        <div className='mb-4'>
            <h6 className='text-center mt-3'>Estadísticas de tu equipo:</h6>
            <section style={{ maxWidth: '35rem' }} className='border border-3 rounded border-success w-75 mx-auto text-dark d-flex justify-content-around'>
                <div>
                    <p>Total inteligencia: </p>
                    <p>Total fuerza: </p>
                    <p>Total velocidad: </p>
                    <p>Total durabilidad: </p>
                    <p>Total poder: </p>
                    <p>Total combate: </p>
                    <p>Peso promedio: </p>
                    <p>Altura promedio:  </p>
                </div>
                <div className='text-secondary fw-bold'>
                    <p>{props.int[0]}</p>
                    <p>{props.str[0]}</p>
                    <p>{props.vel[0]}</p>
                    <p>{props.dur[0]}</p>
                    <p>{props.pow[0]}</p>
                    <p>{props.com[0]}</p>
                    <p>{props.peso} Kg</p>
                    <p>{props.altura} Cms</p>
                </div>
            </section>
        </div>
    );
};

export default CajaEstadisticas;