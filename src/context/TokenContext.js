import React, { useState } from 'react';

const TokenContext = React.createContext({})

export function TokenProvider({ children }) {
    const [token, setToken] = useState(undefined)
    return <TokenContext.Provider value={{ token, setToken }}>
        {children}
    </TokenContext.Provider>
}

export default TokenContext;


//Prueba que no funcionó para guardar TOKEN, se guarda pero se reinicia al recargar la página. No válido para primera autenticación
//Sirve para valores globales y poder actualizar el valor declarado aquí (undefined) dentro de otros componentes
//aprendido de video MIDUDEV