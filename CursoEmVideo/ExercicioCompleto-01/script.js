function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    var minutos = data.getMinutes()
    msg.innerHTML = "Agora são: " + hora + " horas e " + minutos +" minutos"

    if (hora >= 0 && hora < 12){
        img.src = 'Manha.png'
        document.body.style.background = '#FF1493'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'Tarde.png'
        document.body.style.background = '#FF4500'
    } else {
        img.src = 'Noite.png'
        document.body.style.background = '#00008B'
    }
}
