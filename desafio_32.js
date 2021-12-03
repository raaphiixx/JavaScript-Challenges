function advinheONumero(tentativa){
    numran = Math.random() * (20 - 0) + 0
    if(tentativa == numran.toFixed(0)){
        console.log("ACERTOU")
    }else {
        console.log("ERROU")
    }
}

advinheONumero(11)