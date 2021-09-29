import React from 'react';
import whiteFist from '../images/whiteFist.png'

function Layout({ children }) {
    return (
        <div className='text-success'>
            {children}
            <footer className='bg-dark fixed-bottom d-flex flex-row justify-content-around w-100' style={{ height: '2.3rem' }}>
                <p className='my-auto'>Hecho para challenge de Alkemy</p>
                <img src={whiteFist} alt="Loco puño de color blanco" className='h-100' />
            </footer>
        </div>
    );
}

export default Layout;