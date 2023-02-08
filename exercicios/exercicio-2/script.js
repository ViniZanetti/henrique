function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //para pegar a data, ano atual, e o fullYear para pegar os 4 digitos e não apenas só o 23
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criei uma tag img por aqui
        img.setAttribute('id' , 'foto') // e tmb criei um id para ela,,, criei um img com o id foto,,, id , para , foto,,, ou no html... <img id = 'foto>
        if (fsex[0].checked){
            genero = 'Homem'
            if( idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src','bebe-homem.webp')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','jovem-homem.webp')
            }else if (idade < 50){
                //Dulto
                img.setAttribute('src','homem-adulto.webp')
            }else{
                //idoso
                img.setAttribute('src','velho-homem.jpeg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if( idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src','bebe-mulher.webp')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','jovem-mulher.webp')
            }else if (idade < 50){
                //Dulto
                img.setAttribute('src','mulher-adulta.webp')
            }else{
                //idoso
                img.setAttribute('src','velha-mulher.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!!`
        res.appendChild(img)  //adc um elemento
    }
}