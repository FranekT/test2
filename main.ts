input.onButtonPressed(Button.A, function () {
    basic.showString("N")
    basic.showLeds(`
        . . . # .
        # . . # .
        . # . # .
        . . # # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . .
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . # #
        . . . # .
        . . . # #
        . . . # .
        . . . # #
        `)
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # # #
        . . # . .
        . . # # #
        `)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # # # #
        `)
    basic.showString("E")
    basic.showLeds(`
        # # # . .
        . . . . .
        # # . . .
        . . . . .
        # # # . .
        `)
})
basic.forever(function () {
	
})
