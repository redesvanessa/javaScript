function contador(){
    var inicio = window.document.getElementById('start')
    var fim   = window.document.getElementById('end')
    var passos  = window.document.getElementById('step')
    var res   = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0  || passos.value.length == 0) {
        res.innerHTML = "Faltam dados"
    } else {
        res.innerHTML = "Contando:  <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if (p <= 0) {
            p = 1
        }

        if(i < f){
            for(let c = i; c<= f; c+= p){
                res.innerHTML += c + " \u{1F449}"	 
            }
        }else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += c + " \u{1F449}"	 
            }
        }
        res.innerHTML += " \u{1F3C1}"	
    }
  

}
