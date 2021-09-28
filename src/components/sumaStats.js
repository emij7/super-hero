
const sumaStats = (estadistica, heroe1, heroe2, heroe3, heroe4, heroe5, heroe6) => {
    let total = 0
    if (heroe1 !== null) { if (heroe1.powerstats[estadistica] !== 'null') { total = total + parseInt(heroe1.powerstats[estadistica]) } }
    if (heroe2 !== null) { if (heroe2.powerstats[estadistica] !== 'null') { total = total + parseInt(heroe2.powerstats[estadistica]) } }
    if (heroe3 !== null) { if (heroe3.powerstats[estadistica] !== 'null') { total = total + parseInt(heroe3.powerstats[estadistica]) } }
    if (heroe4 !== null) { if (heroe4.powerstats[estadistica] !== 'null') { total = total + parseInt(heroe4.powerstats[estadistica]) } }
    if (heroe5 !== null) { if (heroe5.powerstats[estadistica] !== 'null') { total = total + parseInt(heroe5.powerstats[estadistica]) } }
    if (heroe6 !== null) { if (heroe6.powerstats[estadistica] !== 'null') { total = total + parseInt(heroe6.powerstats[estadistica]) } }

    return total
};

export default sumaStats;