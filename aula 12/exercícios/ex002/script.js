function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#B6C791'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#D98673'
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#322840'
    }
}