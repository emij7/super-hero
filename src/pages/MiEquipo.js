import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Cargando from '../components/Cargando';
import DatosMiEquipo from '../components/DatosMiEquipo';
import Header from '../components/Header';
import obtenerHeroes from '../components/obtenerHeroes';
import ApiContext from '../context/ApiContext';
import UsuarioContext from '../context/UsuarioContext';
import './miEquipo.css'




const MiEquipo = () => {
    const usuarioActual = useContext(UsuarioContext).usuario
    const misHeroesID = obtenerHeroes(usuarioActual)
    const url = useContext(ApiContext)
    const [loading, setloading] = useState(true)
    const [datos, setdatos] = useState([])


    async function getData() {
        for (let i = 0; i < 6; i++) {
            await axios.get(`${url}/${misHeroesID[i]}`)
                .then(function (response) {
                    setdatos(datos => [...datos, response.data])
                })
                .catch(function (error) {
                    console.log(error);
                })

        }
    }
    useEffect(() => {
        const recoleccionDeDatos = async () => {
            await getData()
            setloading(false)
        }
        recoleccionDeDatos()
    }, [])

    if (!localStorage.TOKEN) {
        return <Redirect to='/' />
    } else {
        return (
            <div className='mi-equipo__contenedor'>
                <Header />
                <h1>¡Mi equipo!</h1>
                {loading === true ?
                    <Cargando />
                    : (
                        <DatosMiEquipo datos={datos} usuario={usuarioActual} />
                    )}
                <Link to='busqueda'>Buscar heroes!</Link>
            </div>
        )
    }

}

export default MiEquipo;