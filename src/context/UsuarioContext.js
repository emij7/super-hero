import React, { useState } from "react"

const UsuarioContext = React.createContext({})

export function UsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState('challenge@alkemy.org')
    return <UsuarioContext.Provider value={{ usuario, setUsuario }}>
        {children}
    </UsuarioContext.Provider>
}

export default UsuarioContext;
