function triangulo(lado1, lado2, lado3){
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        console.log("É um triângulo!")
    } else{
        console.log("Não é um triângulo")
    }
}
triangulo(6,5,9)
