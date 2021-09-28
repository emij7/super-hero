
const promedioPesoAltura = (heroe1, heroe2, heroe3, heroe4, heroe5, heroe6) => {
    let peso = 0
    let altura = 0
    let cantidadHeroes = 0
    let total = []
    if (heroe1 !== null) {
        cantidadHeroes = cantidadHeroes + 1
        peso = peso + parseInt(heroe1.appearance.weight[1])
        altura = altura + parseInt(heroe1.appearance.height[1])
    }
    if (heroe2 !== null) {
        cantidadHeroes = cantidadHeroes + 1
        peso = peso + parseInt(heroe2.appearance.weight[1])
        altura = altura + parseInt(heroe2.appearance.height[1])
    }
    if (heroe3 !== null) {
        cantidadHeroes = cantidadHeroes + 1
        peso = peso + parseInt(heroe3.appearance.weight[1])
        altura = altura + parseInt(heroe3.appearance.height[1])
    }
    if (heroe4 !== null) {
        cantidadHeroes = cantidadHeroes + 1
        peso = peso + parseInt(heroe4.appearance.weight[1])
        altura = altura + parseInt(heroe4.appearance.height[1])
    }
    if (heroe5 !== null) {
        cantidadHeroes = cantidadHeroes + 1
        peso = peso + parseInt(heroe5.appearance.weight[1])
        altura = altura + parseInt(heroe5.appearance.height[1])
    }
    if (heroe6 !== null) {
        cantidadHeroes = cantidadHeroes + 1
        peso = peso + parseInt(heroe6.appearance.weight[1])
        altura = altura + parseInt(heroe6.appearance.height[1])
    }
    total = [peso !== 0 ? peso / cantidadHeroes : 0, altura !== 0 ? altura / cantidadHeroes : 0]
    return total
};

export default promedioPesoAltura;