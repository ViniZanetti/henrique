var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora}hrs`)
if (hora >= 0 && hora < 4){
    console.log (`Boa madrugada`)
}else if( hora > 4 && hora < 12){
console.log('Bom Dia')
}else if(hora>=12 && hora<17){
    console.log('Boa tarde')
}else if(hora>=17 && hora<23.59){
    console.log('Boa noite')
}   
 