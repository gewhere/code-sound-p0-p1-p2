input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . . .
        # . . . #
        `)
    music.setVolume(30)
    music.playMelody("C E D G F B A C5 ", 150)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    music.setVolume(25)
    music.playMelody("C D E F G A B C5 ", 150)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . . # #
        # . . # #
        `)
    music.setVolume(30)
    music.playMelody("C5 B A G F E D C ", 150)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    music.setVolume(25)
    music.playMelody("C D E F F E D C ", 150)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # . . . #
        # . . . #
        `)
    music.setVolume(30)
    music.playMelody("C5 A B F G D E C ", 150)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        . # # . .
        . . . # .
        # # # . .
        `)
    music.setVolume(50)
    soundExpression.giggle.play()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # . .
        `)
    music.setVolume(50)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
music.setBuiltInSpeakerEnabled(false)
basic.showLeds(`
    # # # # #
    . . . . .
    # # # # #
    . . . . .
    # # # # #
    `)
