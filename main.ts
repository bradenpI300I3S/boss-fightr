namespace SpriteKind {
    export const Protectoion = SpriteKind.create()
}
namespace StatusBarKind {
    export const SheildCooldown = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JumpCount < 2) {
        mySprite.vy = -100
        JumpCount += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
function Level1 () {
    tiles.setTilemap(tilemap`level1`)
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Shield.destroy()
    SheildCreated = false
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Protectoion, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 500)
})
let myEnemy: Sprite = null
let SheildCreated = false
let Shield: Sprite = null
let JumpCount = 0
let mySprite: Sprite = null
Level1()
scene.cameraFollowSprite(mySprite)
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
mySprite.setPosition(20, 50)
controller.moveSprite(mySprite, 100, 0)
JumpCount = 0
mySprite.ay = 200
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        JumpCount = 0
    }
})
forever(function () {
    if (SheildCreated) {
        Shield.setPosition(mySprite.x + 13, mySprite.y)
    }
})
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
})
