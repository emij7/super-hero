import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import MiEquipoRender from '../pages/MiEquipoRender'

test('Not render "Mi equipo" when token is unavailable', () => {
    // localStorage.TOKEN
    const component = render(<BrowserRouter><MiEquipoRender /></BrowserRouter>)
    const searchText = component.queryByText('Buscador de heroes')
    // console.log(component)
    // console.log(component.rerender)
    expect(searchText).toBeNull();
})

let objetoInicial = {
    heroeBueno1: '',
    heroeBueno2: '',
    heroeBueno3: '',
    heroeMalo1: '',
    heroeMalo2: '',
    heroeMalo3: ''
}
// const validacionUsuario = (email) => {
//     if (localStorage.getItem(`${email}`) === null) {
//         localStorage.setItem(email, JSON.stringify(objetoInicial))
//     }
// }

test('Render "Mi equipo" when token is available', () => {
    localStorage.TOKEN = objetoInicial
    console.log(localStorage.TOKEN)
    const component = render(<BrowserRouter><MiEquipoRender /></BrowserRouter>)
    component.getByText('!Mi equipo!')
})