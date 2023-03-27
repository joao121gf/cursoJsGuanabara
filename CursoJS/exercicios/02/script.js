


function verificar(){
    res = document.getElementById("res");
    var ano = 2023
    var anoInput = document.getElementById('iano');
    var idade = ano - Number(anoInput.value)
    
    var homem = document.getElementById('isexM')
    var img = document.getElementById('img')
    if (isexM.checked){
        if (idade <= 10 && idade >= 0){
            img.src = 'crianca masc.jpg'
            res.innerHTML = `Criança (${idade}anos)`
        }else if (idade <= 50 && idade >= 10){
            img.src = 'adulto.jpg'
            res.innerHTML = `Adulto (${idade}anos)`
        }else if (idade <= 120 && idade >= 10 ){
            img.src = 'idosos m.jpg'
            res.innerHTML = `Idoso (${idade}anos)`
        }else{
            window.alert('Digite uma idade real')
        }
    }else if (isexF.checked){
        if (idade <= 10 && idade >= 0){
            img.src = 'crianca feminina.jpg'
            res.innerHTML = `Criança (${idade}anos)`
        }else if (idade <= 50 && idade >= 10){
            img.src = 'mulher 20.jpg'
            res.innerHTML = `Adulta (${idade}anos)`
        }else if (idade <= 120 && idade >= 10){
            img.src = 'idosa.jpg'
            res.innerHTML = `Idosa (${idade}anos)`
        }else{
            window.alert('Digite uma idade real')
        }
    }

}

