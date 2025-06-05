namespace SpriteKind {
    export const Plat = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Spike = SpriteKind.create()
    export const TrackAttack = SpriteKind.create()
    export const baseAttack = SpriteKind.create()
}
namespace StatusBarKind {
    export const bossHealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.baseAttack, function (sprite, otherSprite) {
    if (!(Immunity)) {
        PlayerStatusBar.value += -5
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spike, function (sprite, otherSprite) {
    if (!(Immunity)) {
        PlayerStatusBar.value += -5
        pause(100)
    }
})
function MainMenu () {
    scene.setBackgroundImage(assets.image`TrueBackground`)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Play"),
    miniMenu.createMenuItem("Settings")
    )
    myMenu.setFrame(img`
        8888.....88....888....88.88....888....888...8888
        867788..8768..86768..8678768..86768..8678.887768
        8767768.8777886767688777877788676768877788677678
        877677686767787767787767676778776778776786776778
        .8778766677678776778767767767877677876778678778.
        .8677866867668676768667686766867676866766687768.
        ..86668688676886868867688867688686886768686668..
        .888666888888888888888888888888888888888866688..
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87768866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87766866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        ..886668888888888888888888888888888888888666888.
        ..86668686768868688676888676886868867688686668..
        .8677866676686767686676867668676768667686687768.
        .8778768776787767787677677678776778767766678778.
        877677687677877677877676767787767787767686776778
        8767768877788676768877787778867676887778.8677678
        867788.8768..86768..8678768..86768..8678..887768
        8888...888....888....88.88....888....88.....8888
        `)
    myMenu.setPosition(160, 136)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            myMenu.close()
            tiles.setCurrentTilemap(tilemap`level`)
            sprites.destroy(textSprite2)
            MakePlayer()
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            GameStart = true
        } else {
            myMenu.close()
            SettingsMenu()
        }
    })
}
function Shoot_Projectile () {
    if (Math.percentChance(5)) {
        for (let index = 0; index < 5; index++) {
            BossProjectile = sprites.create(assets.image`Tracker Attack`, SpriteKind.TrackAttack)
            BossProjectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            BossProjectile.setFlag(SpriteFlag.AutoDestroy, true)
            BossProjectile.setPosition(Boss2.x, Boss2.y)
            BossProjectile.setVelocity(randint(-100, 100), randint(-100, 100))
            timer.after(500, function () {
                for (let value of sprites.allOfKind(SpriteKind.TrackAttack)) {
                    value.follow(tempHitbox, 75)
                }
            })
        }
    } else {
        for (let index = 0; index < 5; index++) {
            BossProjectile = sprites.create(assets.image`basic Attack`, SpriteKind.baseAttack)
            BossProjectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            BossProjectile.setFlag(SpriteFlag.AutoDestroy, true)
            BossProjectile.setPosition(Boss2.x, Boss2.y)
            BossProjectile.setVelocity(randint(-100, 100), randint(-100, 100))
            timer.after(500, function () {
                for (let value2 of sprites.allOfKind(SpriteKind.baseAttack)) {
                    spriteutils.setVelocityAtAngle(value2, spriteutils.angleFrom(value2, tempHitbox), randint(200, 300))
                }
            })
        }
    }
}
sprites.onOverlap(SpriteKind.Spike, SpriteKind.Spike, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
function SettingsMenu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Difficulty: " + DifficultyArray[DifficltyPick]),
    miniMenu.createMenuItem("Back")
    )
    myMenu.setFrame(img`
        8888.....88....888....88.88....888....888...8888
        867788..8768..86768..8678768..86768..8678.887768
        8767768.8777886767688777877788676768877788677678
        877677686767787767787767676778776778776786776778
        .8778766677678776778767767767877677876778678778.
        .8677866867668676768667686766867676866766687768.
        ..86668688676886868867688867688686886768686668..
        .888666888888888888888888888888888888888866688..
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87768866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87766866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        ..886668888888888888888888888888888888888666888.
        ..86668686768868688676888676886868867688686668..
        .8677866676686767686676867668676768667686687768.
        .8778768776787767787677677678776778767766678778.
        877677687677877677877676767787767787767686776778
        8767768877788676768877787778867676887778.8677678
        867788.8768..86768..8678768..86768..8678..887768
        8888...888....888....88.88....888....88.....8888
        `)
    myMenu.setPosition(160, 136)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            if (DifficltyPick < 3) {
                myMenu.close()
                DifficltyPick += 1
                SettingsMenu()
            } else {
                DifficltyPick = 0
                myMenu.close()
                SettingsMenu()
            }
        } else {
            myMenu.close()
            MainMenu()
        }
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStart) {
        if (JumpsLeft > 0) {
            tempHitbox.vy = -100
            JumpsLeft += -1
        }
    }
})
function CreateBossHealthBar (HP: number) {
    BossHealthBar = statusbars.create(290, 8, StatusBarKind.bossHealth)
    BossHealthBar.max = HP
    BossHealthBar.value = HP
    BossHealthBar.setColor(2, 11)
    BossHealthBar.setBarBorder(1, 15)
    BossHealthBar.setPosition(160, 232)
    textSprite = textsprite.create("Boss Health")
    textSprite.setPosition(160, 220)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    if (Immunity) {
        BossHealthBar.value += -1
    } else {
        PlayerStatusBar.value += -5
        pause(100)
    }
})
function makePlayerStatusBar () {
    PlayerStatusBar = statusbars.create(180, 15, StatusBarKind.Health)
    PlayerStatusBar.setBarBorder(1.5, 15)
    PlayerStatusBar.setPosition(160, 0)
    PlayerStatusBar.max = 999
    PlayerStatusBar.value = 999
    playerDash = statusbars.create(20, 15, StatusBarKind.Magic)
    playerDash.setBarBorder(1.5, 15)
    playerDash.setPosition(255, 0)
    playerDash.max = 1
    playerDash.value = 1
    playerDash.setColor(10, 11)
}
function littlebuddyHRay () {
    littlebuddy = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    littlebuddy.setFlag(SpriteFlag.GhostThroughWalls, true)
    littlebuddy.setFlag(SpriteFlag.AutoDestroy, true)
    littlebuddy.setPosition(Boss2.x, Boss2.y)
    littlebuddy.setVelocity(randint(-100, 100), randint(-100, 100))
    timer.after(500, function () {
    	
    })
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    pause(500)
    game.splash("Game Over", "You Lose (you suck)")
    game.reset()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStart) {
        if (!(Cooldown)) {
            playerDash.value += -1
            Cooldown = true
            controller.moveSprite(tempHitbox, 0, 0)
            Immunity = true
            tempHitbox.setFlag(SpriteFlag.GhostThroughWalls, true)
            spriteutils.setVelocityAtAngle(tempHitbox, spriteutils.angleFrom(tempHitbox, Boss2), 200)
            tempHitbox.ay = 0
            timer.after(500, function () {
                Immunity = false
                tempHitbox.ay = 120
                tempHitbox.setFlag(SpriteFlag.GhostThroughWalls, false)
                controller.moveSprite(tempHitbox, 100, 0)
                timer.after(2000, function () {
                    playerDash.value += 1
                    Cooldown = false
                })
            })
        }
    }
})
function MakePlayer () {
    tempHitbox = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(tempHitbox, assets.tile`myTile3`)
    tempHitbox.y += -16
    tempHitbox.ay = 120
    controller.moveSprite(tempHitbox, 100, 0)
    makePlayerStatusBar()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrackAttack, function (sprite, otherSprite) {
    if (!(Immunity)) {
        sprites.destroy(otherSprite)
        PlayerStatusBar.value += -5
        pause(100)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (GameStart) {
        let Return_Wall_Array2: tiles.Location[] = []
        for (let value22 of Return_Wall_Array2) {
            tiles.setWallAt(value22, true)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStart) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(tempHitbox.tilemapLocation().column + -1, tempHitbox.tilemapLocation().row + 1), assets.tile`myTile3`) || (tiles.tileAtLocationEquals(tiles.getTileLocation(tempHitbox.tilemapLocation().column + 0, tempHitbox.tilemapLocation().row + 1), assets.tile`myTile3`) || tiles.tileAtLocationEquals(tiles.getTileLocation(tempHitbox.tilemapLocation().column + 1, tempHitbox.tilemapLocation().row + 1), assets.tile`myTile3`))) {
            let Return_Wall_Array: tiles.Location[] = []
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(tempHitbox.tilemapLocation().column + -1, tempHitbox.tilemapLocation().row + 1), assets.tile`myTile3`)) {
                tiles.setWallAt(tiles.getTileLocation(tempHitbox.tilemapLocation().column + -1, tempHitbox.tilemapLocation().row + 1), false)
                Return_Wall_Array.push(tiles.getTileLocation(tempHitbox.tilemapLocation().column + -1, tempHitbox.tilemapLocation().row + 1))
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(tempHitbox.tilemapLocation().column + 0, tempHitbox.tilemapLocation().row + 1), assets.tile`myTile3`)) {
                tiles.setWallAt(tiles.getTileLocation(tempHitbox.tilemapLocation().column + 0, tempHitbox.tilemapLocation().row + 1), false)
                Return_Wall_Array.push(tiles.getTileLocation(tempHitbox.tilemapLocation().column + 0, tempHitbox.tilemapLocation().row + 1))
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(tempHitbox.tilemapLocation().column + 1, tempHitbox.tilemapLocation().row + 1), assets.tile`myTile3`)) {
                tiles.setWallAt(tiles.getTileLocation(tempHitbox.tilemapLocation().column + 1, tempHitbox.tilemapLocation().row + 1), false)
                Return_Wall_Array.push(tiles.getTileLocation(tempHitbox.tilemapLocation().column + 1, tempHitbox.tilemapLocation().row + 1))
            }
            pauseUntil(() => !(controller.down.isPressed()))
            for (let value3 of Return_Wall_Array) {
                tiles.setWallAt(value3, true)
            }
        }
    }
})
let DistV = 0
let Cooldown = false
let littlebuddy: Sprite = null
let playerDash: StatusBarSprite = null
let textSprite: TextSprite = null
let BossHealthBar: StatusBarSprite = null
let JumpsLeft = 0
let tempHitbox: Sprite = null
let Boss2: Sprite = null
let BossProjectile: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let PlayerStatusBar: StatusBarSprite = null
let Immunity = false
let textSprite2: TextSprite = null
let GameStart = false
let DifficultyArray: string[] = []
let DifficltyPick = 0
DifficltyPick = 0
DifficultyArray = [
"Easy",
"Medium",
"Hard",
"Extreme"
]
GameStart = false
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
textSprite2 = textsprite.create("BREAD QUEST")
textSprite2.setMaxFontHeight(15)
textSprite2.setPosition(170, 70)
textSprite2.setOutline(1, 15)
MainMenu()
scene.centerCameraAt(160, 136)
forever(function () {
    if (GameStart) {
        if (controller.down.isPressed()) {
            if (tempHitbox.vy < 50) {
                tempHitbox.vy = 50
            }
        }
    }
})
game.onUpdate(function () {
    characterAnimations.loopFrames(
    tempHitbox,
    assets.animation`myAnim3`,
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    tempHitbox,
    assets.animation`myAnim1`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    tempHitbox,
    assets.animation`myAnim2`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
game.onUpdateInterval(2000, function () {
    if (GameStart) {
        if (Math.percentChance(50)) {
            Shoot_Projectile()
        } else {
            if (Math.percentChance(50)) {
                animation.stopAnimation(animation.AnimationTypes.All, Boss2)
                animation.runImageAnimation(
                Boss2,
                assets.animation`myAnim0`,
                100,
                false
                )
                timer.after(400, function () {
                    spriteutils.setVelocityAtAngle(Boss2, spriteutils.angleFrom(Boss2, tempHitbox), 200)
                    animation.runImageAnimation(
                    Boss2,
                    assets.animation`myAnim`,
                    100,
                    true
                    )
                    timer.after(500, function () {
                        for (let index = 0; index < 8; index++) {
                            timer.background(function () {
                                Boss2.vx = Boss2.vx / 2
                                Boss2.vy = Boss2.vy / 2
                                pause(100)
                            })
                        }
                    })
                })
            } else {
                animation.stopAnimation(animation.AnimationTypes.All, Boss2)
                animation.runImageAnimation(
                Boss2,
                assets.animation`myAnim0`,
                100,
                false
                )
                timer.after(400, function () {
                    animation.runImageAnimation(
                    Boss2,
                    assets.animation`myAnim`,
                    100,
                    true
                    )
                    DistV = spriteutils.distanceBetween(Boss2, tempHitbox) / 200
                    spriteutils.setVelocityAtAngle(Boss2, spriteutils.angleFrom(Boss2, spriteutils.pos(tempHitbox.x + tempHitbox.vx * DistV, tempHitbox.y + tempHitbox.vy * DistV)), 200)
                    timer.after(500, function () {
                        for (let index = 0; index < 8; index++) {
                            timer.background(function () {
                                Boss2.vx = Boss2.vx / 2
                                Boss2.vy = Boss2.vy / 2
                                pause(100)
                            })
                        }
                    })
                })
            }
        }
    }
})
