var vel = 20.5
console.log(`A velocidade do carro é ${vel}`)
if(vel > 100 && vel < 180){
    console.log(`Você ultrapassou o limite de velocidade. MULTADO`)
}else if( vel>=180){
    console.log(`Parabens! Sua velocidade foi de ${vel}km/h, você é um retardado e acabou de perder a carteira`)
}else{
    console.log( 'Dirija com cuidado')
}
