
const calcularMayorEstadistica = (INT, STR, VEL, DUR, POW, COM) => {
    let x = [INT, STR, VEL, DUR, POW, COM]

    let orden = x.sort((a, b) => {

        return b[0] - a[0]
    })
    return orden[0][1]
};

export default calcularMayorEstadistica;