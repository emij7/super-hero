import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TokenContext from '../context/TokenContext';
import './miEquipo.css'

const MiEquipo = ({ autorizacion }) => {
    const context = useContext(TokenContext)
    if (!localStorage.TOKEN) {
        return <Redirect to='/' />
    } else {
        return (
            <div className='mi-equipo__contenedor'>
                <Header />
                <h1>FUNCIONO!</h1>
                <p>{context.token}</p>
                <Link to='busqueda'>Buscar heroes!</Link>
            </div>
        )
    }

}

export default MiEquipo;