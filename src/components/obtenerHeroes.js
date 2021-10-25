const obtenerHeroes = (objeto) => {
    let listado = []
    listado.push(objeto.heroeBueno1, objeto.heroeBueno2, objeto.heroeBueno3, objeto.heroeMalo1, objeto.heroeMalo2, objeto.heroeMalo3)
    return listado
    // localStorage.setItem(`${usuario}`, JSON.stringify(objeto))
}
export default obtenerHeroes