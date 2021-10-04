import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Busqueda from '../components/Busqueda';
import Header from '../components/Header';
import './buscador.css'
import UsuarioContext from '../context/UsuarioContext';

const Buscador = () => {
    const usuarioActual = useContext(UsuarioContext).usuario
    return (
        <div className='buscador__contenedor mw-100' style={{ marginBottom: '2.3rem' }}>
            <Header />
            <Link to='/miEquipo' className='btn btn-outline-secondary d-block mx-auto' style={{ width: '10rem' }}>Volver al Home</Link>
            <h1 className='text-center m-4'>Buscador de heroes</h1>
            <p className='text-center text-dark'>Buscá a tus super-heroes preferidos.</p>
            <p className='text-center text-success '>&bull; color borde heroes Buenos</p>
            <p className='text-center text-danger'>&bull; color borde heroes malos</p>
            <Busqueda usuario={usuarioActual} />
        </div >
    );
};

export default Buscador;