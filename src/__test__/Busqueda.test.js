import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { waitFor, screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Busqueda from '../components/Busqueda'




test('Required input', async () => {
    render(<Busqueda />)
    const search = screen.getByLabelText(/nombre/i)
    user.click(screen.getByRole('button', { name: /buscar/i }))

    await waitFor(() => {
        expect(search).toHaveErrorMessage('Ingresá algún caracter')
    })
})