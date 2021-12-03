{
    console.log("Exercicio 1")
    console.log("Hello World!")
}
console.log()
{
    console.log("Exercicio 2")
    nome = "Raphael"
    console.log(`Olá ${nome}, é um prazer te conhecer`)
}
console.log()
{
    console.log("Exercicio 3")
    nome = "Pedro"
    salario = 10000.00
    console.log(`O funcionário ${nome} tem um salário de ${salario} U$S`)
}
console.log()
{
    console.log("Exercicio 4")
    numero_1 = 8
    numero_2 = 5
    soma = numero_1 + numero_2
    console.log(`A soma entre ${numero_1} e ${numero_2} é: ${soma} `)
}
console.log()
{
    console.log("Exercicio 5")
    nota_1 = 4.5
    nota_2 = 8.5
    media = (nota_1 + nota_2) / 2
    console.log(`A média entre ${nota_1} e ${nota_2} é ${media}`)
}
console.log()
{
    console.log("Exercicio 6")
    num = 9
    suc = num + 1
    ant = num - 1
    console.log(`O antecessor de ${num} é ${ant}`)
    console.log(`O sucessor de ${num} é ${suc}`)
}
console.log()
{
    console.log("Exercicio 7")
    num = 3
    dobro = num * 2
    umterco = num / 3
    console.log(`O dobro de ${num} é ${dobro}`)
    console.log(`1/3 de ${num} é ${umterco}`)
}
console.log()
{
    console.log("Exercicio 8")
    metros = 2000
    km = metros / 1000
    hm = metros / 100
    dam = metros / 10
    dm = metros * 10
    cm = metros * 100
    mm = metros * 1000
    console.log(`A distância de ${metros} metros corresponde a: `)
    console.log(`${km} KM`)
    console.log(`${hm} HM`)
    console.log(`${dam} DAM`)
    console.log(`${dm} DM`)
    console.log(`${cm} CM`)
    console.log(`${mm} MM`)
}
console.log()
{
    console.log("Exercicio 9")
    real = 56.10
    dolar = real / 5.61
    console.log(`${real}R$ equivalem a ${dolar}U$S`)
}
console.log()
{
    console.log("Exercicio 10")
    largura = 5.5
    altura = 4.6
    area = Math.ceil(largura * altura)
    // ARREDONDA PARA MAIS
    tinta = (area/2).toFixed(0)
    console.log(`A área total corresponde a ${area}m² e serão necessário ${tinta} baldes de tinta para pintar`)
}
console.log()
{
    console.log("Exercicio 11")
    a = 4
    b = 2
    c = -4
    delta = (b**2) - (4*a*c)
        if (delta < 0){
            console.log(`Delta equivale a ${delta}`)
            console.log("Delta menor que 0 não há raizes")
        }else{
            console.log(`Delta equivale a ${delta}`)
        }
}
console.log()
{
    console.log("Exercicio 12")
    produto_preco = 100
    desconto = 5
    total_desconto = produto_preco * (desconto/100)
    novo_preco = produto_preco - total_desconto
    console.log(`O produto de R$ ${produto_preco.toFixed(2)} caiu para R$ ${novo_preco.toFixed(2)}`)
}
console.log()
{
    console.log("Exercicio 13")
    salario = 1000
    aumento = salario * (15/100)
    novo_salario = salario + aumento
    console.log(`O salário de R$ ${salario.toFixed(2)} aumentou para R$ ${novo_salario.toFixed(2)}`)
}
console.log()
{
    console.log("Exercicio 14")
    carro = 90
    preco_km = 0.20
    total_km = 10
    dias = 5

    valor_carro = carro * dias
    total_valor_km = preco_km * total_km
    console.log(total_valor_km)
}
console.log()
{
    console.log("Exercicio 15")
    valor_dia = 25 * 8
    dias_trabalhados = 22
    total_salario = valor_dia * dias_trabalhados

    console.log(`O salário total será de R$ ${total_salario.toFixed(2)}`)
}
console.log()
{
    console.log("Exercicio 17")
    velocidade_carro = 100
    velocidade_maxima = 80
    multa = 5
    total_multa = 0
    
    if (velocidade_carro > velocidade_maxima){
        total_multa = (velocidade_carro - velocidade_maxima) * multa
        console.log(`MULTADO NO VALOR DE R$ ${total_multa}`)
    }else {
        console.log("SEM MULTA")
    }
}
console.log()
{
    console.log("Exercicio 18")
    data = new Date()
    ano_atual = data.getFullYear()
    ano_nascimento = 2005
    idade = ano_atual - ano_nascimento

    console.log(idade > 18 ? `Você tem ${idade} anos e já pode votar`: `Você tem ${idade} anos e ainda não pode votar`)
}
console.log()
{
    console.log("Exercicio 19")

    nome1 = "Raphael"
    nota1_nome1 = 8.5
    nota2_nome1 = 7.9
    media1 = (nota1_nome1 + nota2_nome1) / 2
    console.log(media1 > 7 ? `${nome1} teve uma média ${media1} e teve um bom aproveitamento`: `${nome1} teve uma média ${media1} com mal aproveitamento`)

    nome2 = "Felipe"
    nota2_nome2 = 8.5
    nota2_nome2 = 7.9
    media2 = (nota2_nome2 + nota2_nome2) / 2
    console.log(media2 > 7 ? `${nome2} teve uma média ${media2} e teve um bom aproveitamento`: `${nome2} teve uma média ${media2} com mal aproveitamento`)
}
console.log()
{
    console.log("Exercicio 20")
    num = 13
    console.log(num % 2 === 0 ? `O número ${num} é PAR`: `O número ${num} é impar`)
}
console.log()
{
    console.log("Exercicio 21")
    ano = 2024

    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
        console.log(`O ano ${ano} é bissexto`)
    } else{
        console.log(`O ano ${ano} não é bissexto`)
    }
}
console.log()
{
    console.log("Exercicio 22")
    ano_nascimento = 2003
    ano_atual = new Date().getFullYear()
    idade = ano_atual - ano_nascimento
    alistamento = idade - 18

    if(idade < 18){
        console.log(`"Faltam ${Math.abs(alistamento)} anos para se alistar `)
    } else if (idade > 18){
        console.log(`Já se passaram ${alistamento} anos da idade para alistamento`)
    } else{
        console.log(`Você está com ${idade} anos, IDADE exata para se alistar `)
    }
}
console.log()
{
    console.log("Exercicio 23")
    nome = "Regina"
    sexo = "F"
    preco_produto = 100
    let desconto, novo_preco

    if (sexo === "F"){
        desconto = preco_produto * (13/100)
        novo_preco = preco_produto - desconto
        console.log(`Sra. ${nome}, o produto de R$ ${preco_produto.toFixed(2)} no desconto de dia das mulheres fica R$ ${novo_preco.toFixed(2)}`)
    } else{
        desconto = preco_produto * (5/100)
        novo_preco = preco_produto - desconto
        console.log(`Sr. ${nome}, o produto de R$ ${preco_produto.toFixed(2)} no desconto de dia das mulheres fica R$ ${novo_preco.toFixed(2)}`)
    }
}
console.log()
{
    console.log("Exercicio 24")
    distancia_km = 201
    valor_200km = 0.5
    valor_mais = 0.45

    if (distancia_km < 200){
        valor_pagar = distancia_km * valor_200km
        console.log(`O valor da corrida foi R$ ${valor_pagar.toFixed(2)}`)
    } else {
        valor_pagar = valor_mais * distancia_km
        console.log(`O valor da corrida foi R$ ${valor_pagar.toFixed(2)}`)
    }
}
console.log()
{
    console.log("Exercicio 26")
    n1 = 8
    n2 = 7

    if (n1 > n2){
        console.log(`N1 ${n1} é maior que N2 ${n2}`)
    } else if (n2 > n1) {
        console.log(`N2 ${n2} é maior que N1 ${n1}`)
    } else{
        console.log(`N1 ${n1} é igual a N2 ${n2}`)
    }
}
console.log()
{
    console.log("Exercicio 27")
    nota1 = 7
    nota2 = 8
    media = (nota1 + nota2) / 2

    if (media <= 4.9){
        console.log(`Media: ${media} REPROVADO`)
    } else if (media >= 5 && media <= 6.9) {
        console.log(`Media: ${media} RECUPERAÇÃO`)
    } else {
        console.log(`Média: ${media} APROVADO`)
    }
}
console.log()
{
    console.log("Exercicio 28")
    altura = 50
    largura = 30
    area_terreno = altura * largura
    if (area_terreno < 100){
        console.log(`Àrea TOTAL ${area_terreno} TERRENO POPULAR`)
    } else if (area_terreno >= 100 && area_terreno < 500){
        console.log(`Àrea TOTAL ${area_terreno} TERRENO MASTER`)
    } else {
        console.log(`Àrea TOTAL ${area_terreno} TERRENO VIP`)
    }
}
console.log()
{
    console.log("Exercicio 29")
    funcionario = "Raphael"
    tempo_servico = 12
    salario = 3500

    if (tempo_servico < 3){
        aumento_salarial = (salario * (3/100)) + salario
        console.log(`Funcionário ${funcionario} seu salário de R$ ${salario.toFixed(2)} teve um aumento para R$ ${aumento_salarial.toFixed(2)} por conta dos seus ${tempo_servico} anos de serviço`)

    } else if (tempo_servico >= 3 && tempo_servico < 10){
        aumento_salarial = (salario * (12.5/100)) + salario
        console.log(`Funcionário ${funcionario} seu salário de R$ ${salario.toFixed(2)} teve um aumento para R$ ${aumento_salarial.toFixed(2)} por conta dos seus ${tempo_servico} anos de serviço`)

    } else {
        aumento_salarial = (salario * (20/100)) + salario
        console.log(`Funcionário ${funcionario} seu salário de R$ ${salario.toFixed(2)} teve um aumento para R$ ${aumento_salarial.toFixed(2)} por conta dos seus ${tempo_servico} anos de serviço`)
    }
}
console.log()
{
    console.log("Exercicio 33")
    salario = 5000
    prestacao = salario * (30/100)
    casa = 1000000
    tempo_casa = 120
    prestacao_casa = casa / tempo_casa

    if(prestacao >= prestacao_casa){
        console.log("COMPRA APROVADA")
    } else{
        console.log("COMPRA NEGATA")
    }
}
console.log()
{
    console.log("Exercicio 34")
    peso = 60
    altura = 1.7
    imc = peso / (altura ** 2)
    if(imc < 18.5){
        console.log(`Seu IMC É ${imc.toFixed(2)} e está ABAIXO DO PESO IDEAL`)
    }else if(imc >= 18.5 && imc < 25){
        console.log(`Seu IMC É ${imc.toFixed(2)} e está NO PESO IDEAL`)
    }else if(imc >= 25 && imc < 30){
        console.log(`Seu IMC É ${imc.toFixed(2)} e está SOBREPESO`)
    }else if(imc >= 30 && imc < 40){
        console.log(`Seu IMC É ${imc.toFixed(2)} e está OBESIDADE`)
    }else{
        console.log(`Seu IMC É ${imc.toFixed(2)} e está OBESIDADE MÓRBIDA`)
    }
}
console.log()
{
    console.log("Exercicio 35")
    carro_popular = 1
    carro_luxo = 2
    function aluguelCarro(opcao, dia, km){

        if(opcao === 1 && km < 100){
            total_km = km * 0.20
            valor_pagar = (90 * dia) + total_km
            console.log(`TOTAL ${valor_pagar.toFixed(2)}`) 
        } else if(opcao == 1 && km >= 100 ){
            total_km = km * 0.10
            valor_pagar = (90 * dia) + total_km
            console.log(`TOTAL ${valor_pagar.toFixed(2)}`) 
        }

        if(opcao === 2 && km < 100){
            total_km = km * 0.30
            valor_pagar = (150 * dia) + total_km
            console.log(`TOTAL ${valor_pagar.toFixed(2)}`) 
        } else if(opcao === 2 && km >= 100 ){
            total_km = km * 0.25
            valor_pagar = (150 * dia) + total_km
            console.log(`TOTAL ${valor_pagar.toFixed(2)}`) 
        }
    }
    aluguelCarro(2, 3, 100)
}
console.log()
{
    console.log("Exercicio 36")
    hora = 10
    function atividadeFisica(hora){
        if (hora < 10){
            pontos = 2 * hora
            valor = pontos * 0.05
            console.log(`Por ${hora} horas e ${pontos} pontos acumulados, seu desconto será de ${valor}`)
        } else if(hora >= 10 && hora < 20){
            pontos = 5 * hora
            valor = pontos * 0.05
            console.log(`Por ${hora} horas e ${pontos} pontos acumulados, seu desconto será de ${valor}`)
        } else{
            pontos = 10 * hora
            valor = pontos * 0.05
            console.log(`Por ${hora} horas e ${pontos} pontos acumulados, seu desconto será de ${valor}`)
        }
    }
    atividadeFisica(10)
}
console.log()
{
    console.log("Exercicio 37")
    salario_atual = 5000

    function novoSalario(sexo, tempo){
        if (sexo === "M"){
            if (tempo < 15){
                novo_salario = salario_atual * (3/100) + salario_atual
                console.log(`Por seus ${tempo} anos seu salário saiu de R$ ${salario_atual.toFixed(2)}, para R$ ${novo_salario.toFixed(2)}`)
            }else if(tempo >= 15 && tempo < 20){
                novo_salario = salario_atual * (13/100) + salario_atual
                console.log(`Por seus ${tempo} anos seu salário saiu de R$ ${salario_atual.toFixed(2)}, para R$ ${novo_salario.toFixed(2)}`)
            } else{
                novo_salario = salario_atual * (25/100) + salario_atual
                console.log(`Por seus ${tempo} anos seu salário saiu de R$ ${salario_atual.toFixed(2)}, para R$ ${novo_salario.toFixed(2)}`)
            }
        }
        if (sexo === "F"){
            if (tempo < 15){
                novo_salario = salario_atual * (5/100) + salario_atual
                console.log(`Por seus ${tempo} anos seu salário saiu de R$ ${salario_atual.toFixed(2)}, para R$ ${novo_salario.toFixed(2)}`)
            }else if(tempo >= 15 && tempo < 20){
                novo_salario = salario_atual * (12/100) + salario_atual
                console.log(`Por seus ${tempo} anos seu salário saiu de R$ ${salario_atual.toFixed(2)}, para R$ ${novo_salario.toFixed(2)}`)
            } else{
                novo_salario = salario_atual * (23/100) + salario_atual
                console.log(`Por seus ${tempo} anos seu salário saiu de R$ ${salario_atual.toFixed(2)}, para R$ ${novo_salario.toFixed(2)}`)
            }
        }
    }

    novoSalario("M", 14)
    novoSalario("F", 14)
}
console.log()
{
    console.log("Exercicio 38")
    c = 5
    while (c <11){
        c ++
        console.log(c)
    }
    console.log("ACABOU")
}
console.log()
{
    console.log("Exercicio 39")
    c = 11
    while (c > 3){
        c--
        console.log(c)
    }
    console.log("ACABOU")
}
console.log()
{
    console.log("Exercicio 40")
    c = 0
    while (c < 18){
        c += 3
        console.log(c)
    }
    console.log("ACABOU")
}
console.log()
{
    console.log("Exercicio 41")
    c = 105
    while (c > 0){
        c -= 5
        console.log(c)
    }
    console.log("ACABOU")
}
console.log()
{
    console.log("Exercicio 42")
    c = 0
    while (c <= 15){
        console.log(c)
        c++
    }
}
console.log()
{
    console.log("Exercicio 43")
    div4 = 30
    while (div4 >= 0){
        if (div4 % 4 == 0){
            console.log(`[${div4}]`)
        } else{
            console.log(div4)
        }
        div4--
    }
    console.log("ACABOU")
}
console.log()
{
    console.log("Exercicio 44")
    inicial = 3
    ultimo = 20
    incremento = 2
    
    while(inicial <= ultimo){
        console.log(inicial)
        inicial += incremento
    }
}
console.log()
{
    console.log("Exercicio 45")
    
    function contador(inicial, final, incremento){
        if(inicial < final){

            while(inicial <= final){
                console.log(inicial)
                inicial += incremento
            }
        }

        if (inicial > final){
            while (final <= inicial){
                console.log(inicial)
                inicial -= incremento
            }
        }
    }
    contador(20, 10, 2)
}
console.log()
{
    console.log("Exercicio 46")
    inicio = 6
    final = 12
    total = 6

    while (inicio < final){
        inicio ++
        total += inicio
        console.log(inicio)
    }
    console.log(total)
}
console.log()
{
    console.log("Exercicio 47")
    inicio = 12
    final = 6
    total = 12

    while (inicio > final){
        inicio --
        total += inicio
        console.log(inicio)
    }
    console.log(total)
}
console.log()
{
    console.log("Exercicios 48 e 49 ELIMINADOS")
    console.log(null)
}
console.log()
{
    console.log("Exercicio 50")
    c = 0
    mais5 = 0
    div3 = 0
    while (c < 20){
        c++
        numAleatorio = Math.random() * 10 - 0 + 0
        aleatorio = numAleatorio.toFixed(0)
        if (aleatorio > 5){
            mais5 ++
        }
        if (aleatorio % 3 == 0){
            div3 ++
        }
        console.log(aleatorio)
    }
    console.log(`Números maiores de que 5: ${mais5}`)
    console.log(`Números divisiveis por 3: ${div3}`)
}
console.log()
{
    console.log("Exercicio 51")
    produtos = [10, 15, 12.5, 5.3, 20]
    console.log(`O menor valor foi R$ ${Math.max(... produtos)}`)
    console.log(`O menor valor foi R$ ${Math.min(... produtos)}`)
}
console.log()
{
    console.log("Exercicio 52")
    idade = [2, 18, 20, 19, 3]
    maiorIdade = Math.max(... idade)
    mais18 = 0
    menos5 = 0
    total = 0
    for (c in idade){
        total += idade[c]
        if (idade[c] >= 18){
            mais18++
        }
        if (idade[c] < 5){
            menos5++
        }
    }
    
    console.log(`A maior idade foi: ${maiorIdade}`)
    console.log(`Há um total de ${mais18} pessoas maiores de 18 anos`)
    console.log(`Há um total de ${menos5} pessoas menores de 5 anos`)
    console.log(`A soma total de idade é de ${total} anos`)
}
console.log()
{
    console.log("Exercicio 53, 54 ELIMINADO")
    console.log(null)
}
console.log()
{
    console.log("Exercicio 56 ~ 60 ELIMINADO")
    console.log(null)
}
console.log()
{
    console.log("Exercicio 61")
    increment = 3
    for (c = 0; c <= 30; c+=increment){
        console.log(c)
    }
    console.log("Acabou!")
}
console.log()
{
    console.log("Exercicio 62, 63 ELIMINADO")
    console.log(null)
}
console.log()
{
    console.log("Exercicio 64")  
    for (c = 0; c <= 40; c += 5){
        console.log(c)
    }
    console.log("Acabou!")
}
console.log()
{
    console.log("Exercicio 65")
    for (i = 100; i >= 0; i -= 5){
        console.log(i)
    }
}
console.log()
{
    console.log("Exercicio 66")
    function tabuada(valor){
        for (c = valor; c <= valor; c++){
            for (i = 0; i <=10; i++){
                console.log(`${c} x ${i} = ${c*i}`)
            }
        }
    }
    tabuada(5)
}
console.log()
{
    console.log("Exercicio 67")
    valor = 10
    for(c = 0; c <= valor; c++){
        console.log(c)
    }
    console.log("FIM!")
}
console.log()
{
    console.log("Exercicio 68 ELIMINADO")
    console.log(null)
}
console.log()
{
    console.log("Exercicio 71 ~ 85 ELIMINADO")
    console.log(null)
}
console.log()
{
    console.log("Exercicio 86")
    function helloWorld(){
        traco = "-"
        phrase = "  Hello World!"
        traco_repeat = traco.repeat(12)
        console.log("+",traco_repeat,"+")
        console.log(phrase)
        console.log("+",traco_repeat,"+")
    }
    helloWorld()
}
console.log()
{
    console.log("Exercicio 88")
    phrase = "Finishing JS exercices"
    function repeatPhrase(phrase){
        for (c= 0; c<=4; c++){
            console.log(c, phrase)
        }
    }
    repeatPhrase(phrase)
}
console.log()
{
    console.log("Exercicio 89")
    phrase = "Finishing JS exercices"
    border1 = "+-------=========------+"
    border2 = "~~~~~~~~:::::::::~~~~~~~"
    border3 = "<<<<<<<<--------->>>>>>>"
    function repeatPhrase(phrase, border){
        console.log(border)
        for (c= 0; c<=4; c++){
            console.log(phrase)
        }
        console.log(border)
    }
    repeatPhrase(phrase, border3)
}
console.log()
{
    console.log("Exercicio 90")
    function somador(a, b){
        console.log(`A soma total foi ${a+b}`)
    }
    somador(12, 1.3)
}
console.log()
{
    console.log("Exercicio 91")
    function maior(a, b){
        console.log(a > b ? `A: ${a} é maior que B: ${b}`: a < b ? `A: ${a} é menor que B: ${b}` : "Ambos númeo são iguais")
    }
    maior(2,3)
}
console.log()
{
    console.log("Exercicio 92")
    function parOuImpar(a){
        console.log(a % 2 == 0 ? `${a} é par` : `${a} é impar`)
    }
    parOuImpar(2)
}
console.log()
{
    console.log("Exercicio 93")
}