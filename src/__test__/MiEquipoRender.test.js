import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import MiEquipoRender from '../pages/MiEquipoRender'
import { createStore } from 'redux'
import { heroReducer } from '../reducers/heroReducer'
import { Provider } from 'react-redux';

const store = createStore(heroReducer)

test('Not render "Mi equipo" when token is unavailable', () => {
    const component = render(<Provider store={store}><BrowserRouter><MiEquipoRender /></BrowserRouter></Provider>)
    const searchText = component.queryByText('Buscador de heroes')
    expect(searchText).toBeNull();
})



// test('Render "Mi equipo" when token is available', () => {
//     localStorage.TOKEN = 'token'
//     const component = render(<Provider store={store}><BrowserRouter><MiEquipoRender /></BrowserRouter></Provider>)

//     component.getByText('Mi equipo')
// })