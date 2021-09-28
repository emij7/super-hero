let reg = /""/g
const contadorHeroesFaltantes = (usuario) => localStorage.getItem(`${usuario}`).match(reg).length
export default contadorHeroesFaltantes