namespace SpriteKind {
    export const Protectoion = SpriteKind.create()
}
namespace StatusBarKind {
    export const SheildCooldown = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JumpCount < JumpStatus) {
        mySprite.vy = -140
        JumpCount += 1
    }
})
function Character () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 195
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 27))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        Shield = sprites.create(img`
            . . f f f . . 
            . f 8 8 8 f . 
            . f 8 8 8 f . 
            . f 8 9 8 f . 
            f 8 8 8 9 8 f 
            f 8 8 8 9 8 f 
            f 8 8 8 8 8 f 
            f 8 8 8 8 8 f 
            f 8 8 8 8 8 f 
            f 8 8 8 8 8 f 
            . f 8 8 8 f . 
            . f 8 8 8 f . 
            . f 8 8 8 f . 
            . . f f f . . 
            `, SpriteKind.Protectoion)
        Shield.setPosition(mySprite.x + 13, mySprite.y)
        SheildCreated = true
    }
})
function Level1 () {
    tiles.setTilemap(tilemap`level1`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    firstEffect()
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 8 8 8 8 2 f d 4 . . 
        . . 4 4 f 8 8 9 9 8 8 f 4 4 . . 
        . . . . . 8 9 8 8 9 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Shield.destroy()
    SheildCreated = false
})
function firstEffect () {
    JumpStatus = 2
    pause(30000)
    JumpStatus = 1
}
let SheildCreated = false
let Shield: Sprite = null
let mySprite: Sprite = null
let JumpStatus = 0
let JumpCount = 0
Level1()
Character()
JumpCount = 0
JumpStatus = 1
forever(function () {
    if (SheildCreated) {
        Shield.setPosition(mySprite.x + 13, mySprite.y)
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        JumpCount = 0
    }
})
