const defaultState = {
    heroeBueno1: '',
    heroeBueno2: '',
    heroeBueno3: '',
    heroeMalo1: '',
    heroeMalo2: '',
    heroeMalo3: '',
}
export const heroReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_GOOD':
            if (state.heroeBueno1 === '') {
                return { ...state, heroeBueno1: action.hero }
            } else if (state.heroeBueno2 === '') {
                return { ...state, heroeBueno2: action.hero }
            } else if (state.heroeBueno3 === '') {
                return { ...state, heroeBueno3: action.hero }
            } else {
                alert('Equipo de super-heroes buenos lleno')
                return { ...state }
            }
        case 'ADD_BAD':
            if (state.heroeMalo1 === '') {
                return { ...state, heroeMalo1: action.hero }
            } else if (state.heroeMalo2 === '') {
                return { ...state, heroeMalo2: action.hero }
            } else if (state.heroeMalo3 === '') {
                return { ...state, heroeMalo3: action.hero }
            } else {
                alert('Equipo de super-heroes malos lleno')
                return { ...state }
            }
        case 'DELETE_GOOD':
            if (state.heroeBueno1 === action.hero) {
                return { ...state, heroeBueno1: '' }
            } else if (state.heroeBueno2 === action.hero) {
                return { ...state, heroeBueno2: '' }
            } else if (state.heroeBueno3 === action.hero) {
                return { ...state, heroeBueno3: '' }
            } else {
                return { ...state }
            }
        case 'DELETE_BAD':
            if (state.heroeMalo1 === action.hero) {
                return { ...state, heroeMalo1: '' }
            } else if (state.heroeMalo2 === action.hero) {
                return { ...state, heroeMalo2: '' }
            } else if (state.heroeMalo3 === action.hero) {
                return { ...state, heroeMalo3: '' }
            } else {
                return { ...state }
            }
        default:
            return state
    }

}
export const addHero = (id, bando) => {
    const addGood = {
        type: 'ADD_GOOD',
        hero: id
    }
    const addBad = {
        type: 'ADD_BAD',
        hero: id
    }
    if (bando === 'good') {
        return addGood
    } else {
        return addBad
    }

}
export const removeHero = (id, bando) => {
    const deleteGood = {
        type: 'DELETE_GOOD',
        hero: id
    }
    const deleteBad = {
        type: 'DELETE_BAD',
        hero: id
    }
    if (bando === 'good') {
        return deleteGood
    } else {
        return deleteBad
    }

}