function diasPerdidos(cigarro_dia, anos_fumar){
    perca = 0.166
    dia = 24
    dias_fumar = anos_fumar * 365
    total_cigarro = dias_fumar * cigarro_dia
    perca_em_dias = (total_cigarro * perca)/dia    
    console.log(`Você perdeu um total de ${Math.ceil(perca_em_dias)} DIAS`)
}
diasPerdidos(3, 4)