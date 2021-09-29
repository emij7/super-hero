const quitarDeEquipo = (id, bando, usuario) => {
    if (bando === 'good') {
        const datos = localStorage.getItem(`${usuario}`)
        let objetoUsuario = JSON.parse(datos)
        objetoUsuario.heroeBueno1 === id ?
            objetoUsuario.heroeBueno1 = ""
            : objetoUsuario.heroeBueno2 === id ?
                objetoUsuario.heroeBueno2 = ""
                : objetoUsuario.heroeBueno3 === id ?
                    objetoUsuario.heroeBueno3 = ""
                    : console.log('Error, no encontrado. Contactar al creador de app')
        localStorage.setItem(`${usuario}`, JSON.stringify(objetoUsuario))
    } else {
        const datos = localStorage.getItem(`${usuario}`)
        let objetoUsuario = JSON.parse(datos)
        objetoUsuario.heroeMalo1 === id ?
            objetoUsuario.heroeMalo1 = ""
            : objetoUsuario.heroeMalo2 === id ?
                objetoUsuario.heroeMalo2 = ""
                : objetoUsuario.heroeMalo3 === id ?
                    objetoUsuario.heroeMalo3 = ""
                    : console.log('Error, no encontrado. Contactar al creador de app')
        localStorage.setItem(`${usuario}`, JSON.stringify(objetoUsuario))
    }
}

export default quitarDeEquipo