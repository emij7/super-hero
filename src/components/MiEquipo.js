import React from 'react';
import MiEquipoRender from '../pages/MiEquipoRender';
import { Redirect } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux'
// import { addHero, removeHero } from '../reducers/heroReducer'


const MiEquipo = () => {
    // const state = useSelector(state => state)
    // const dispatch = useDispatch()
    // const click = () => {
    //     dispatch(addHero(7, 'good'))
    //     console.log(state)
    // }
    // const click2 = () => {
    //     dispatch(removeHero(7, 'good'))
    //     console.log(state)
    // }
    if (!localStorage.TOKEN) {
        return <Redirect to='/' />
    } else {
        return (
            <MiEquipoRender />
        )
    }
};

export default MiEquipo;