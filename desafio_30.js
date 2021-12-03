function triangulo(lado1, lado2, lado3){
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        if (lado1 == lado2 && lado2 == lado3){
            console.log("TRIÂNGULO EQUILÁTERO")
        } else if (lado1 == lado2 & lado1 != lado3){
            console.log("TRIÂNGULO ISÓSCELES")
        } else{
            console.log("TRIÂNGULO ESCALENO")
        }
    } else{
        console.log("Não é um triângulo")
    }
}
triangulo(3,1,5)