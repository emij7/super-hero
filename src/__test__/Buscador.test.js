import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Buscador from '../pages/Buscador';
import { BrowserRouter } from 'react-router-dom';

test('Not render "buscador" when token is unavailable', () => {
    // localStorage.TOKEN
    const component = render(<BrowserRouter><Buscador /></BrowserRouter>)
    const searchText = component.queryByText('Buscador de heroes')
    // console.log(component)
    // console.log(component.rerender)
    expect(searchText).toBeNull();
})

test('Render "buscador" when token is available', () => {
    localStorage.TOKEN = 'Something'
    const component = render(<BrowserRouter><Buscador /></BrowserRouter>)
    component.getByText('Buscador de heroes')
})
