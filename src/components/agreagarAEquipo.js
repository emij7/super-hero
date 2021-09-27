const agregarAEquipo = (id, bando, usuario) => {
    if (bando === 'good') {
        const datos = localStorage.getItem(`${usuario}`)
        let objetoUsuario = JSON.parse(datos)
        objetoUsuario.heroeBueno1 === '' ?
            objetoUsuario.heroeBueno1 = `${id}`
            : objetoUsuario.heroeBueno2 === '' ?
                objetoUsuario.heroeBueno2 = id
                : objetoUsuario.heroeBueno3 === '' ?
                    objetoUsuario.heroeBueno3 = id
                    : console.log('Equipo bueno LLENO')
        console.log(objetoUsuario)
        localStorage.setItem(`${usuario}`, JSON.stringify(objetoUsuario))
    } else {
        const datos = localStorage.getItem(`${usuario}`)
        let objetoUsuario = JSON.parse(datos)
        objetoUsuario.heroeMalo1 === '' ?
            objetoUsuario.heroeMalo1 = id
            : objetoUsuario.heroeMalo2 === '' ?
                objetoUsuario.heroeMalo2 = id
                : objetoUsuario.heroeMalo3 === '' ?
                    objetoUsuario.heroeMalo3 = id
                    : console.log('Equipo malo LLENO')
        console.log(objetoUsuario)
        localStorage.setItem(`${usuario}`, JSON.stringify(objetoUsuario))
    }
}
export default agregarAEquipo