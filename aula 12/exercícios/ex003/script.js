function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/crianca h.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem h.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto h.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso h.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/crianca m.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem m.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.'
        res.appendChild(img)
    }
}