jo = 1 // PEDRA
ken = 2 // PAPEL
po = 3 // TESOURA
function joKenPo(opcao1, opcao2){
    if (opcao1 === jo && opcao2 === ken || opcao1 === ken && opcao2 === jo){
        console.log("PAPEL WINS")
    }
    if (opcao1 === ken && opcao2 === po || opcao1 === po && opcao2 === ken){
        console.log("TESOURA WINS")
    }
    if (opcao1 === jo && opcao2 === po || opcao1 === po && opcao2 === jo){
        console.log("PEDRA WINS")
    }
    if (opcao1 === opcao2){
        console.log("EMPATE")
    }
}
joKenPo(ken, jo)
/* jo = pedra // ken = papel // po = tesoura
*/