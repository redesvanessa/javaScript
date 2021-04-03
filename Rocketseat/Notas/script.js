let nota = "50"



function getScore(nota){
    let notaAlf = ''
    if (nota >= 90 && nota <= 100) {
        notaAlf = "A"
        console.log('Sua nota em números foi ' + nota + ' e em Caracteres é: ' + notaAlf)
    } else if (nota >= 80 && nota <= 89) {
        notaAlf = "B"
         console.log('Sua nota em números foi ' + nota + ' e em Caracteres é: ' + notaAlf);
    } else if (nota >= 70 && nota <= 79){
        notaAlf = "C"
            console.log('Sua nota em números foi ' + nota + ' e em Caracteres é: ' + notaAlf);
    } else if (nota >= 60 && nota <= 69){
        notaAlf = "D"
            console.log('Sua nota em números foi ' + nota + ' e em Caracteres é: ' + notaAlf);
    } else if (nota < 60 && nota > 0){
         notaAlf = "F"
            console.log('Sua nota em números foi ' + nota + ' e em Caracteres é: ' + notaAlf);
    } else {
        console.log(`Desculpe, o valor de ${nota} não é uma nota valida.`) 
    }
    return nota
}

getScore(200)

