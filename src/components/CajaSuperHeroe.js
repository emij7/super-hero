import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addHero, removeHero } from '../reducers/heroReducer'


const CajaSuperHeroe = (props) => {
    const dispatch = useDispatch()
    const team = useSelector(team => team)
    const [borde, setBorde] = useState(undefined)
    useEffect(() => {
        if (props.bando === 'good') {
            setBorde('border-success')
        } else {
            setBorde('border-danger')
        }
    }, [])

    const manejoClickAnadir = () => {
        dispatch(addHero(props.id, props.bando))
    }
    const manejoClickQuitar = () => {
        dispatch(removeHero(props.id, props.bando))
    }
    return (
        <div className={`col-md-5 d-flex flex-row align-items-center border border-3 rounded ${borde} p-1 justify-content-between m-1`} style={{ maxWidth: '90vw' }}>
            <div style={{ height: '25vh' }} className='align-middle'>
                <img src={props.imagen} alt="Imágen Super-heroe" className='img-fluid h-100 ' />
            </div>
            <p className='fw-bold'>{props.nombre}</p>
            {(Object.values(team).indexOf(props.id) < 0) ?
                <button className='btn btn-success' onClick={() => manejoClickAnadir()}>Agregar</button>
                : <button className=" btn btn-danger" onClick={() => manejoClickQuitar()}>Quitar</button>
            }
        </div>
    );
};

export default CajaSuperHeroe;