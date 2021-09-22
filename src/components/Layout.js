import React from 'react';

function Layout({ children }) {
    return (
        <div className='text-success'>
            {children}
            <footer className='bg-dark fixed-bottom'>
                <p>Hecho para challenge de Alkemy</p>
            </footer>
        </div>
    );
}

export default Layout;