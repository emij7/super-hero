import React from 'react';
import FormularioIngreso from '../components/FormularioIngreso';
import blackLogo from '../images/blackFist.png'
import './styles.css'

const PaginaLogin = () => {
    return (
        <div className="login-container"  >
            <section className='title-container h-50 d-flex flex-row justify-content-center align-items-center m-4'>
                <h1 className='text-center'>Super-App</h1>
                <img src={blackLogo} alt="Ícono puño color negro" className='h-25' />
            </section>
            <p className='text-center'>Logueate para ingresar</p>
            <FormularioIngreso />
        </div >
    )
}

export default PaginaLogin;