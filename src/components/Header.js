import React from 'react';

function Header() {
    return (
        <div className='d-flex justify-content-around align-items-center bg-dark border border-1 fixed-top' style={{ height: '4rem' }} >
            <p className='m-0'>Superhero app</p>
            <a className='link-light' href='./' onClick={() => { localStorage.removeItem('TOKEN') }}>Cerrar sesión</a>
        </div>
    );
}

export default Header;