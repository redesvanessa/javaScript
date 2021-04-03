let num     = document.getElementById("fnum")
let lista   = document.getElementById("flista")
let res     = document.getElementById("res")
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'Valor ' + num.value + ' adicionado.'
        lista.appendChild(item)
        res.innerHTML = '-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-'
    }else{
        alert('Valor inválido ou já adicionado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        } 
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número encontrado foi o ${maior}.</p>`
        res.innerHTML += `<p>O menor número encontrado foi o ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números encontrados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos números encontrados é ${media}.</p>`

    }
}