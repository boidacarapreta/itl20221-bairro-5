radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 50) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showNumber(0)
    } else {
        if (receivedNumber == 51) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showNumber(1)
        }
    }
})
let canal = 100
radio.setGroup(canal)
basic.showNumber(5)
