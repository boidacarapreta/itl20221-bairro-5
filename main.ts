radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= 50 && receivedNumber <= 59) {
        mensagem = receivedNumber % 10
        basic.showNumber(mensagem)
    }
})
let mensagem = 0
let canal = 100
let bairro = 5
radio.setGroup(canal)
basic.showString("" + (bairro))
