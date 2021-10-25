import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { waitFor, screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import FormularioIngreso from '../components/FormularioIngreso'




test('Required email and password', async () => {
    render(<FormularioIngreso />)
    const email = screen.getByRole('textbox', { name: /direccion de correo/i })
    const password = screen.getByLabelText(/contraseña/i)
    user.click(screen.getByRole('button', { name: /enviar/i }))
    await waitFor(() => {
        expect(email).toHaveErrorMessage('E-mail obligatorio')
        expect(password).toHaveErrorMessage('Password obligatorio')
    })
})

test('Incorrect username or password', async () => {
    render(<FormularioIngreso />)
    const email = screen.getByRole('textbox', { name: /direccion de correo/i })
    const password = screen.getByLabelText(/contraseña/i)
    user.type(email, 'emi@gmail.com')
    user.type(password, '1234')
    user.click(screen.getByRole('button', { name: /enviar/i }))
    await waitFor(() => {
        // screen.getByText(/error: e\-mail y\/o contraseña incorrectos\./i)
        screen.getByText(/error: e\-mail y\/o contraseña incorrectos\./i)

    })
})