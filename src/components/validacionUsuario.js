let objetoInicial = {
    heroeBueno1: '',
    heroeBueno2: '',
    heroeBueno3: '',
    heroeMalo1: '',
    heroeMalo2: '',
    heroeMalo3: ''
}
const validacionUsuario = (email) => {
    if (localStorage.getItem(`${email}`) === null) {
        localStorage.setItem(email, JSON.stringify(objetoInicial))
    }
}
export default validacionUsuario


