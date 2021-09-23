import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FormularioBuscador from '../components/FormularioBuscador';
import Header from '../components/Header';
import './buscador.css'
import UsuarioContext from '../context/UsuarioContext';

const Buscador = () => {
    const usuarioActual = useContext(UsuarioContext)
    console.log(usuarioActual)
    return (
        <div className='buscador__contenedor'>
            <Header />
            <h1>Buscador de heroes</h1>
            <p>Elegí tus heroes para tu equipo o buscá a tu preferido.</p>
            <FormularioBuscador />
            elegidos(?)
            <Link to='/miEquipo'>Ir a mi Equipo</Link>
        </div>
    );
};

export default Buscador;