const obtenerHeroes = (usuario) => {
    const datos = localStorage.getItem(`${usuario}`)
    let objetoUsuario = JSON.parse(datos)
    let listado = []
    listado.push(objetoUsuario.heroeBueno1, objetoUsuario.heroeBueno2, objetoUsuario.heroeBueno3, objetoUsuario.heroeMalo1, objetoUsuario.heroeMalo2, objetoUsuario.heroeMalo3)
    return listado
    // localStorage.setItem(`${usuario}`, JSON.stringify(objetoUsuario))
}
export default obtenerHeroes