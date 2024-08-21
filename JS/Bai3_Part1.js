function avg(x1, x2, x3) {
    return (x1 + x2 + x3) / 3
}
dolphin1 = avg(96, 108, 89)
koalas1 = avg(88, 91, 110)
dolphin2 = avg(97, 112, 101)
koalas2 = avg(109, 95, 123)
dolphin3 = avg(97, 112, 101)
koalas3 = avg(109, 95, 106)

if (dolphin1 > koalas1) {
    if (dolphin1 < 100)
        console.log('No team win')
    else
        console.log(`Dolphin scrore (${dolphin1}) win`)
} else if (dolphin1 < koalas1) {
    if (koalas1 < 100)
        console.log('No team win')
    else
        console.log(`Koalas scrore (${koalas1}) win`)
} else if (dolphin1 = koalas1) {
    if (dolphin1 < 100)
        console.log('No team win')
    else
        console.log(`Dolphin scrore (${dolphin1}) and Koalas score (${koalas1}) well`)
}
if (dolphin2 > koalas2) {
    if (dolphin2 < 100)
        console.log('No team win')
    else
        console.log(`Dolphin scrore (${dolphin2}) win`)
} else if (dolphin2 < koalas2) {
    if (koalas2 < 100)
        console.log('No team win')
    else
        console.log(`Koalas scrore (${koalas2}) win`)
} else if (dolphin2 = koalas2) {
    if (dolphin2 < 100)
        console.log('No team win')
    else
        console.log(`Dolphin scrore (${dolphin2}) and Koalas score (${koalas2}) well`)
}
if (dolphin3 > koalas3) {
    if (dolphin3 < 100)
        console.log('No team win')
    else
        console.log(`Dolphin scrore (${dolphin3}) win`)
} else if (dolphin3 < koalas3) {
    if (koalas1 < 100)
        console.log('No team win')
    else
        console.log(`Koalas scrore (${koalas3}) win`)
} else if (dolphin3 = koalas3) {
    if (dolphin3 < 100)
        console.log('No team win')
    else
        console.log(`Dolphin scrore (${dolphin3}) and Koalas score (${koalas3}) well`)
}