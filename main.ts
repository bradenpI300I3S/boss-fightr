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
function WiseOne () {
    TheWiseOne = sprites.create(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 5 b b e b b e . . . 
        . . . . f 5 5 5 5 e b b e . . . 
        . . . . c b 5 5 5 5 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(TheWiseOne, tiles.getTileLocation(21, 8))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    mySprite.setVelocity(0, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile6`)
    JumpStatus = 2
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
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Shield.destroy()
    SheildCreated = false
})
let SheildCreated = false
let Shield: Sprite = null
let TheWiseOne: Sprite = null
let mySprite: Sprite = null
let JumpStatus = 0
let JumpCount = 0
Level1()
Character()
WiseOne()
JumpCount = 0
JumpStatus = 1
let ShieldAbility = false
timer.after(500, function () {
    tiles.setTileAt(tiles.getTileLocation(3, 26), assets.tile`myTile8`)
    tiles.setTileAt(tiles.getTileLocation(3, 27), assets.tile`myTile7`)
    scene.cameraShake(4, 500)
})
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
