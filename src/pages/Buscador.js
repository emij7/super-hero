import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Busqueda from '../components/Busqueda';
import Header from '../components/Header';
import './buscador.css'
import UsuarioContext from '../context/UsuarioContext';

const Buscador = () => {
    const usuarioActual = useContext(UsuarioContext).usuario
    return (
        <div className='buscador__contenedor'>
            <Header />
            <h1>Buscador de heroes</h1>
            <p>Elegí tus heroes para tu equipo o buscá a tu preferido.</p>
            <Busqueda usuario={usuarioActual} />
            elegidos(?)
            <Link to='/miEquipo'>Ir a mi Equipo</Link>
        </div>
    );
};

export default Buscador;