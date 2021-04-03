let contas = {
    receitas: [2500, 3200, 250, 360.45, 101.21],
    despesas: [100, 352.021, 128.54, 200.14],
}

function somar(array){
    let total = 0
    for (let value of array){
        total += value
    }
    return total
}

function calcular(){
    const calcularReceitas = somar(contas.receitas)
    const calcularDespesas = somar(contas.despesas)

    const total = calcularReceitas - calcularDespesas
    const itsOK =  total >= 0

    if (itsOK){
        console.log("Seu saldo é de: R$" +total.toFixed(2)+ " e esta Positivo")
    } else {
        console.log("Seu saldo é de: R$" +total.toFixed(2)+ " e esta Negativo")
    }

}
calcular();