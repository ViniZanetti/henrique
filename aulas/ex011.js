/*
var n1 = 0
if( n1 > 0 && n1<= 10 ){
    console.log('O numero é 1')
}else{
    if(n1>10 && n1<=20){
        console.log('O numero é 2')
    }else{
        if(n1>20 && n1<=50 )
        console.log('O numero é 0')
    }

 */

 /*var n1 = 19
if( n1 < 16 ){
    console.log('Não vota')
}else{
    if(n1 < 18 || n1 > 65){
        console.log('voto opcional')
    }else{
        if(n1>= 18 )
        console.log('voto obrigatorio')
    }
}*/
/*Dessa forma deu para separ os menores de 18, os entre 16 e 17 eo maiores de idade,,,
 Não irá precisar exemplificar os entre 16 e 17 porque como o programa vai executando na ordem da para se fazer assim:
 sorque se essa iade ira caie no segundo if,,,
 e se quiser tmb posso tirar até o terceiro if e deixar só no else q o resultado ainda será o msm*/

 var n1 = 17
if( n1 < 16 ){
    console.log('Não vota')
}else if(n1 < 18){
        console.log('voto opcional')
    }
