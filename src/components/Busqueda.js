import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import axios from 'axios';
import CajaSuperHeroe from './CajaSuperHeroe';
import { Redirect } from 'react-router';
import Cargando from './Cargando';

const validate = values => {
    /*
    Validamos que el campo no esté vacío.
    */
    const errors = {};  //Manejar errores en los input

    if (!values.nombre) {
        errors.nombre = 'Ingresa algún caracter';
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


    if (!localStorage.TOKEN) {
        return <Redirect to='/' />
    } else {
        return (
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.nombre}
                    />
                    {formik.errors.nombre ? <div>{formik.errors.nombre}</div> : null}
                    <button type='submit'>Buscar</button>
                </form>
                {cargando ?
                    <Cargando />
                    : resultadoBusqueda == null ?
                        null
                        : resultadoBusqueda.map(superHeroe => {
                            return <CajaSuperHeroe nombre={superHeroe.name} imagen={superHeroe.image.url} bando={superHeroe.biography.alignment} key={superHeroe.id} id={superHeroe.id} usuario={props.usuario} />
                        })


                }
            </div>
        );
    }
};

export default Busqueda;