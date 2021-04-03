   function verificar(){
       var data = new Date()
       var ano  = data.getFullYear()
       var fano = document.getElementById('txtano')
       var res  = document.getElementById('res')
       if (fano.value.length == 0 || fano.value > ano) {
           window.alert('[ERRO] Tente novamente')
       }else{
           var fsex = document.getElementsByName('radsex')
           var idade = ano - Number(fano.value)
           var genero = ''
           var img = document.createElement('img')
           img.setAttribute('id', 'foto')

           if (fsex[0].checked){
               genero = 'Homem'
               if (idade >= 0 && idade < 15){
                    img.setAttribute('src', 'HomemBebe.png')
               }else if (idade < 25){
                    img.setAttribute('src', 'HomemJovem.png')
               }else if (idade < 50){
                    img.setAttribute('src', 'HomemAdulto.png')                
               }else {
                    img.setAttribute('src', 'HomemVelho.png')                
               }
           }else if (fsex[1].checked){
               genero = 'Mulher'
                if (idade >= 0 && idade < 15){
                img.setAttribute('src', 'MulherBebe.png')
                }else if (idade < 25){
                        img.setAttribute('src', 'MulherJovem.png')
                }else if (idade < 50){
                        img.setAttribute('src', 'MulherAdulta.png')                
                }else {
                        img.setAttribute('src', 'MulherVelha.png')                
                }
           }
           res.innerHTML = "Detectamos gênero " + genero + " com " + idade + "anos"
           res.appendChild(img)
       }
   }