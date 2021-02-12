function readPin () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(0.1)
    reading += pins.analogReadPin(AnalogPin.P0)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    runSensor = true
    while (runSensor) {
        sensing()
    }
})
function sensing () {
    reading = 0
    for (let index = 0; index <= samples; index++) {
        readPin()
    }
    btnValue = reading / samples
    graphVal = btnValue - offset
    serial.writeLine("" + (graphVal))
    led.plotBarGraph(
    graphVal,
    255
    )
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    runSensor = false
})
let graphVal = 0
let btnValue = 0
let offset = 0
let runSensor = false
let samples = 0
let reading = 0
basic.showNumber(0)
reading = 0
samples = 0
runSensor = true
offset = 292
