import React from 'react';
import MiEquipoRender from '../pages/MiEquipoRender';
import { Redirect } from 'react-router';


const MiEquipo = () => {
    if (!localStorage.TOKEN) {
        return <Redirect to='/' />
    } else {
        return (
            <MiEquipoRender />
        )
    }
};

export default MiEquipo;