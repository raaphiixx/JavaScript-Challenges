pa = [26, 31, 36, 41]
razao = 5

function razaoPA(pa, valor, razao){
    an = pa[0] + (valor - 1) * razao
    tot = 0
    for (c = pa[0]; c < an; c += razao){
        console.log(c)
        tot += c
    }
    console.log(`{${an}} <= último termo da P.A`)
    console.log(`A soma de todos os termos é igual a ${tot}`)
}
razaoPA(pa, 10, razao)

// an = a1 + (n - 1) * r <= descobrir o ultimo termo da P.A
