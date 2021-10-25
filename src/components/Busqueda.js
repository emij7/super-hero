import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import axios from 'axios';
import CajaSuperHeroe from './CajaSuperHeroe';
import Cargando from './Cargando';
import '../pages/buscador.css'

const validate = values => {
    /*
    Validamos que el campo no esté vacío.
    */
    const errors = {};  //Manejar errores en los input

    if (!values.nombre) {
        errors.nombre = 'Ingresá algún caracter';
    }
    return errors;
};

const Busqueda = (props) => {
    const url = useContext(ApiContext)
    const [resultadoBusqueda, setResultadoBusqueda] = useState(null)
    const [cargando, setCargando] = useState(false)

    function obtenerHeroes(url) {
        axios.get(url)
            .then(function (response) {
                // Manejar éxito
                const promesa = response
                setResultadoBusqueda(promesa.data.results)
                setCargando(false)
            })
            .catch(function (error) {
                // Manejar error
                console.log(error);
            })
    }


    const formik = useFormik({
        initialValues: {
            nombre: '',
        },
        validate,
        onSubmit: values => {
            obtenerHeroes(`${url}/search/${values.nombre}`)
            setCargando(true)
        },
    });



    return (
        <div className='w-100'>
            <form onSubmit={formik.handleSubmit}>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        className='w-50 m-2'
                        id="nombre"
                        name="nombre"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.nombre}
                    />
                    <button type='submit' className=' btn btn-outline-primary'>Buscar</button>
                </div>
                {formik.errors.nombre ? <div className='text-danger fw-bold text-center'>{formik.errors.nombre}</div> : null}
            </form>
            <div className='row d-flex justify-content-evenly '>
                {cargando ?
                    <Cargando />
                    : resultadoBusqueda == null ?
                        null
                        : resultadoBusqueda.map(superHeroe => {
                            return <CajaSuperHeroe nombre={superHeroe.name} imagen={superHeroe.image.url} bando={superHeroe.biography.alignment} key={superHeroe.id} id={superHeroe.id} usuario={props.usuario} />
                        })


                }
            </div>

        </div>
    );

};

export default Busqueda;