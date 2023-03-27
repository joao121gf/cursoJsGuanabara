var msg = document.getElementById('msg')
var img = document.getElementById('foto')

var data = new Date()
// dataDia = data.getHours()
dataDia = 11
if (dataDia >=6 && dataDia <=12){
    msg.innerHTML = 'Bom dia'
    img.src = 'sol.png'
    body.style.background = 'darkgreen'
} else if (dataDia >= 12 && dataDia < 18){
    msg.innerHTML = 'Boa tarde'
    img.src ='SDT_anos_80_2D.png'
    body.style.background = 'darkorange'

} else{
    msg.innerHTML = 'Boa noite'
    img.src = 'lua.png.crdownload'
    body.style.background = 'black'


}

