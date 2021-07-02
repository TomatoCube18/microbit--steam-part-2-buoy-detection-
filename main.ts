makerbit.onIrButton(BuoyID.A, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
makerbit.onIrButton(BuoyID.B, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Ghost)
    basic.clearScreen()
})
makerbit.connectIrReceiver(DigitalPin.P1)
