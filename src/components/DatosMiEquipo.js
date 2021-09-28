import React, { useState } from 'react';
import CajaEstadisticas from './CajaEstadisticas';
import calcularMayorEstadistica from './calcularMayorEstadistica';
import promedioPesoAltura from './promedioPesoAltura';
import quitarDeEquipo from './quitarDeEquipo';
import sumaStats from './sumaStats';
import TarjetaHeroe from './TarjetaHeroe';

const DatosMiEquipo = (props) => {
    const [heroe1, setHeroe1] = useState(props.datos[0].response === 'success' ? props.datos[0] : null)
    const [heroe2, setHeroe2] = useState(props.datos[1].response === 'success' ? props.datos[1] : null)
    const [heroe3, setHeroe3] = useState(props.datos[2].response === 'success' ? props.datos[2] : null)
    const [heroe4, setHeroe4] = useState(props.datos[3].response === 'success' ? props.datos[3] : null)
    const [heroe5, setHeroe5] = useState(props.datos[4].response === 'success' ? props.datos[4] : null)
    const [heroe6, setHeroe6] = useState(props.datos[5].response === 'success' ? props.datos[5] : null)

    let sumaInteligencia = [sumaStats('intelligence', heroe1, heroe2, heroe3, heroe4, heroe5, heroe6), 'Inteligencia']
    let sumaFuerza = [sumaStats('strength', heroe1, heroe2, heroe3, heroe4, heroe5, heroe6), 'Fuerza']
    let sumaVelocidad = [sumaStats('speed', heroe1, heroe2, heroe3, heroe4, heroe5, heroe6), 'Velocidad']
    let sumaDurabilidad = [sumaStats('durability', heroe1, heroe2, heroe3, heroe4, heroe5, heroe6), 'Durabilidad']
    let sumaPoder = [sumaStats('power', heroe1, heroe2, heroe3, heroe4, heroe5, heroe6), 'Poder']
    let sumaCombate = [sumaStats('combat', heroe1, heroe2, heroe3, heroe4, heroe5, heroe6), 'Combate']
    let promedioPeso = promedioPesoAltura(heroe1, heroe2, heroe3, heroe4, heroe5, heroe6)[0].toFixed(1)
    let promedioAltura = promedioPesoAltura(heroe1, heroe2, heroe3, heroe4, heroe5, heroe6)[1].toFixed(1)
    let tipoDeEquipo = calcularMayorEstadistica(sumaInteligencia, sumaFuerza, sumaVelocidad, sumaDurabilidad, sumaPoder, sumaCombate)

    const manejarClickEliminar = (id, numeroHeroe) => {
        numeroHeroe < 3 ?
            quitarDeEquipo(id, 'good', props.usuario)
            : quitarDeEquipo(id, 'noGood', props.usuario)
    }
    return (
        <div>
            <p>Tu equipo es de tipo: {tipoDeEquipo}</p>
            <CajaEstadisticas int={sumaInteligencia} str={sumaFuerza} vel={sumaVelocidad} dur={sumaDurabilidad} pow={sumaPoder} com={sumaCombate} peso={promedioPeso} altura={promedioAltura} />
            {heroe1 === null ? null
                : (
                    <div>
                        <TarjetaHeroe estadisticas={heroe1.powerstats} biografia={heroe1.biography} apariencia={heroe1.appearance} imagen={heroe1.image.url} lugarTrabajo={heroe1.work.base} />
                        <button onClick={() => { manejarClickEliminar(heroe1.id, 0); setHeroe1(null) }}>Quitar</button>
                    </div>
                )}
            {heroe2 === null ? null
                : (
                    <div>
                        <TarjetaHeroe estadisticas={heroe2.powerstats} biografia={heroe2.biography} apariencia={heroe2.appearance} imagen={heroe2.image.url} lugarTrabajo={heroe2.work.base} />
                        <button onClick={() => { manejarClickEliminar(heroe2.id, 1); setHeroe2(null) }}>Quitar</button>
                    </div>
                )}
            {heroe3 === null ? null
                : (
                    <div>
                        <TarjetaHeroe estadisticas={heroe3.powerstats} biografia={heroe3.biography} apariencia={heroe3.appearance} imagen={heroe3.image.url} lugarTrabajo={heroe3.work.base} />
                        <button onClick={() => { manejarClickEliminar(heroe3.id, 2); setHeroe3(null) }}>Quitar</button>
                    </div>
                )}
            {heroe4 === null ? null
                : (
                    <div>
                        <TarjetaHeroe estadisticas={heroe4.powerstats} biografia={heroe4.biography} apariencia={heroe4.appearance} imagen={heroe4.image.url} lugarTrabajo={heroe4.work.base} />
                        <button onClick={() => { manejarClickEliminar(heroe4.id, 3); setHeroe4(null) }}>Quitar</button>
                    </div>
                )}
            {heroe5 === null ? null
                : (
                    <div>
                        <TarjetaHeroe estadisticas={heroe5.powerstats} biografia={heroe5.biography} apariencia={heroe5.appearance} imagen={heroe5.image.url} lugarTrabajo={heroe5.work.base} />
                        <button onClick={() => { manejarClickEliminar(heroe5.id, 4); setHeroe5(null) }}>Quitar</button>
                    </div>
                )}
            {heroe6 === null ? null
                : (
                    <div>
                        <TarjetaHeroe estadisticas={heroe6.powerstats} biografia={heroe6.biography} apariencia={heroe6.appearance} imagen={heroe6.image.url} lugarTrabajo={heroe6.work.base} />
                        <button onClick={() => { manejarClickEliminar(heroe6.id, 5); setHeroe6(null) }}>Quitar</button>
                    </div>
                )}
            <p>solo</p>
            <p>de</p>
            <p>relleno</p>
        </div>
    );
};

export default DatosMiEquipo;