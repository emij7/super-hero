import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './miEquipo.css'
import ApiContext from '../context/ApiContext';

const MiEquipo = ({ autorizacion }) => {
    const miToken = useContext(ApiContext)
    if (!localStorage.TOKEN) {
        return <Redirect to='/' />
    } else {
        return (
            <div className='mi-equipo__contenedor'>
                <Header />
                <h1>FUNCIONO!</h1>
                <Link to='busqueda'>Buscar heroes!</Link>
                <p>{miToken}</p>
            </div>
        )
    }

}

export default MiEquipo;