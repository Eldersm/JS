var agora = new Date()

var diaSem = agora.getDay()



switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sabado')
        break
    default:
        console.log('[ERRo] Não existe esse dia')
        break
}