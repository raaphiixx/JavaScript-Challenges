function adivinheONumeroParte2(tentativas){
    numran = Math.random() * (10 - 0) + 0
    rand = numran.toFixed(0)
    
    for (c in tentativas){
        if(tentativas[c] == rand){
            console.log("ACERTOU")
            break
        }else {
            console.log("ERROU")
            break
        }
    }
}

tentativas = [2, 4, 3]
adivinheONumeroParte2(tentativas)

// if(tentativas == numran.toFixed(0)){
//     console.log("ACERTOU")
// }else {
//     console.log("ERROU")
// }
/*
* ARRAY COM TENTATIVAS
* CHECAR SE ALGUMA DAS OPCOES DO ARRAY CORRESPONDE AO NUMERO ALEATORIO
*/