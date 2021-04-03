function descobrir(){
    let banda = document.getElementById('banda')
    let ano = document.getElementById('ano')
    let res  = document.getElementById('res')
    let mus = document.getElementById('musica')

    if (banda.value == 0 || ano.value == 0) {
           window.alert('[ERRO] Você deve selecionar uma banda e um Ano')
    } else {
        let img = document.getElementById('img')

        if (banda.value == "cbj"){
            img.src = "cbjr.png" 

            if (ano.value == "2002"){             
                mus.innerHTML = "A música era: Papo Reto <br/> Relembre: <a href='https://www.youtube.com/watch?v=u5AVFBGzscc'>Clique Aqui</a>"
            } else if (ano.value == "2005"){
                mus.innerHTML = "A música era: Lutar pelo que é Meu <br/> Relembre: <a href='https://www.youtube.com/watch?v=JLrVtc1jUBc'>Clique Aqui</a>"
            }

        } else if (banda.value == "cpm"){
            img.src = "cpm22.png"
            if (ano.value == "2002"){             
                mus.innerHTML = "A música era: Não sei viver <br/> Relembre: <a href='https://www.youtube.com/watch?v=e_OzUN3FUFA'>Clique Aqui</a>"
            } else if (ano.value == "2005"){
                mus.innerHTML = "A música era: Um minuto para o fim do mundo <br/> Relembre: <a href='https://www.youtube.com/watch?v=RsEeyZNiwUk'>Clique Aqui</a>"
            }

        }else if (banda.value == "dtn"){
            img.src = "detonautas.png"
            if (ano.value == "2002"){             
                mus.innerHTML = "A música era: Quando o sol se for <br/> Relembre: <a href='https://www.youtube.com/watch?v=9s3o85FqiVA'>Clique Aqui</a>"
            } else if (ano.value == "2005"){
                mus.innerHTML = "A música era: O Amanhã <br/> Relembre: <a href='https://www.youtube.com/watch?v=hBkO1c9VSP4'>Clique Aqui</a>"
            }

        }else if (banda.value == "nat"){
            img.src = "nati.png"
            if (ano.value == "2002"){             
                mus.innerHTML = "A música era: Leve com você <br/> Relembre: <a href='https://www.youtube.com/watch?v=ZhazwFtrPcA'>Clique Aqui</a>"
            } else if (ano.value == "2005"){
                mus.innerHTML = "A música era: Não chore meu amor <br/> Relembre: <a href='https://www.youtube.com/watch?v=g2MSFDmZdBI'>Clique Aqui</a>"
            }

        }else if (banda.value == "arm"){
            img.src = "armandinho.png"
            
            if (ano.value == "2002"){             
                mus.innerHTML = "A música era: Balanço da Redes <br/> Relembre: <br/> <iframe width='560' height='315' src='https://www.youtube.com/embed/6C6ift4pNx4' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
            } else if (ano.value == "2005"){
                mus.innerHTML = "A música era: Casinha <br/> Relembre: <a href='https://www.youtube.com/watch?v=6C6ift4pNx4'>Clique Aqui</a>"
            }
        }
    }
}


