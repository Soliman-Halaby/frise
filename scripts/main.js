const bg_viewer = document.querySelector(".background")
let bg = new PIXI.Application({
    resizeTo: window,
    view: bg_viewer
})

const boissier_frames = [
    "./assets/char/fem1.png",
    "./assets/char/fem2.png",
    "./assets/char/fem3.png",
    "./assets/char/fem4.png",
    "./assets/char/fem5.png",
    "./assets/char/fem6.png",
    "./assets/char/fem7.png",
    "./assets/char/fem8.png"
]

const loader_bg = new PIXI.Loader("./assets")
loader_bg.add('pl1_bg', 'backgrounds/planche1-bg.png')
loader_bg.add('pl1_fg', 'backgrounds/planche1-fg.png')
loader_bg.add('pl2_bg', 'backgrounds/planche2-bg.png')
loader_bg.add('pl2_fg', 'backgrounds/planche2-fg.png')
loader_bg.add('pl3_bg', 'backgrounds/planche3-bg.png')
loader_bg.add('pl3_fg', 'backgrounds/planche3-fg.png')
loader_bg.add('pl4_bg', 'backgrounds/planche4-bg.png')
loader_bg.add('pl4_fg', 'backgrounds/planche4-fg.png')
loader_bg.add('pl5_bg', 'backgrounds/planche5-bg.png')
loader_bg.add('pl5_fg', 'backgrounds/planche5-fg.png')
loader_bg.add('door', 'backgrounds/door.png')
loader_bg.add('ground', 'backgrounds/ground.png')
loader_bg.add('boissier_front', boissier_frames)
loader_bg.load()
let themes = 1
let sprite_char
let sprite_bg
let sprite_fg
let sprite_bg2
let sprite_fg2
let sprite_bg3
let sprite_fg3
let sprite_bg4
let sprite_fg4
let sprite_bg5
let sprite_fg5
let sprite_ground
let sprite_doors = []

let bg_x = 0
let bg_speed = 0

loader_bg.onProgress.add((res) => {
})
loader_bg.onError.add((res) => {
})
loader_bg.onLoad.add((res) => {
})

loader_bg.onComplete.add((loader) => {
    sprite_bg = new PIXI.Sprite(
        loader.resources.pl1_bg.texture,
        loader.resources.pl1_bg.texture.width,
        loader.resources.pl1_bg.texture.height
        )
    sprite_fg = new PIXI.Sprite(
        loader.resources.pl1_fg.texture,
        loader.resources.pl1_fg.texture.width,
        loader.resources.pl1_fg.texture.height
        )
    sprite_bg2 = new PIXI.Sprite(
        loader.resources.pl2_bg.texture,
        loader.resources.pl2_bg.texture.width,
        loader.resources.pl2_bg.texture.height
        )
    sprite_fg2 = new PIXI.Sprite(
        loader.resources.pl2_fg.texture,
        loader.resources.pl2_fg.texture.width,
        loader.resources.pl2_fg.texture.height
        )
    sprite_bg3 = new PIXI.Sprite(
        loader.resources.pl3_bg.texture,
        loader.resources.pl3_bg.texture.width,
        loader.resources.pl3_bg.texture.height
        )
    sprite_fg3 = new PIXI.Sprite(
        loader.resources.pl3_fg.texture,
        loader.resources.pl3_fg.texture.width,
        loader.resources.pl3_fg.texture.height
        )
    sprite_bg4 = new PIXI.Sprite(
        loader.resources.pl4_bg.texture,
        loader.resources.pl4_bg.texture.width,
        loader.resources.pl4_bg.texture.height
        )
    sprite_bg5 = new PIXI.Sprite(
        loader.resources.pl5_bg.texture,
        loader.resources.pl5_bg.texture.width,
        loader.resources.pl5_bg.texture.height
        )
    sprite_fg4 = new PIXI.Sprite(
        loader.resources.pl4_fg.texture,
        loader.resources.pl4_fg.texture.width,
        loader.resources.pl4_fg.texture.height
        )
    sprite_fg5 = new PIXI.Sprite(
        loader.resources.pl5_fg.texture,
        loader.resources.pl5_fg.texture.width,
        loader.resources.pl5_fg.texture.height
        )
    sprite_ground = new PIXI.TilingSprite(
        loader.resources.ground.texture,
        loader.resources.pl1_bg.texture.width,
        loader.resources.ground.texture.height
        )
    sprite_char = new PIXI.AnimatedSprite.fromFrames(boissier_frames)
    for (let index = 0; index < 5; index++) {
        sprite_doors[index] = new PIXI.Sprite(
            loader.resources.door.texture,
            loader.resources.door.texture.width,
            loader.resources.door.texture.height
        )
    }
    sprite_ground.position.y = window.innerHeight - 136
    sprite_fg.scale.y = 0.75
    sprite_fg.scale.x = 0.75
    sprite_fg2.scale.y = 0.75
    sprite_fg2.scale.x = 0.75
    sprite_fg3.scale.y = 0.75
    sprite_fg3.scale.x = 0.75
    sprite_fg4.scale.y = 0.75
    sprite_fg4.scale.x = 0.75
    sprite_fg5.scale.y = 0.75
    sprite_fg5.scale.x = 0.75
    sprite_char.scale.y = 1.4
    sprite_char.scale.x = 1.4
    sprite_char.anchor.y = 1
    setSpritePosition(sprite_doors[0], 500, 0)
    setSpritePosition(sprite_doors[1], 7780, 0)
    setSpritePosition(sprite_doors[2], 11720, 0)
    setSpritePosition(sprite_doors[3], 15660, 0)
    setSpritePosition(sprite_fg, 0, 89)
    setSpritePosition(sprite_fg2, 3940, 109)
    setSpritePosition(sprite_fg3, 7880, 89)
    setSpritePosition(sprite_fg4, 11820, 89)
    setSpritePosition(sprite_fg5, 15760, 89)
    setSpritePosition(sprite_bg2, 3940, 0 )
    setSpritePosition(sprite_bg3, 7880, 0)
    setSpritePosition(sprite_bg4, 11820, 0)
    setSpritePosition(sprite_bg5, 15760, 0)
    setSpritePosition(sprite_char, 500, window.innerHeight - 10)
    bg.stage.addChild(sprite_bg)
    bg.stage.addChild(sprite_bg2)
    bg.stage.addChild(sprite_bg3)
    bg.stage.addChild(sprite_bg4)
    bg.stage.addChild(sprite_bg5)
    bg.stage.addChild(sprite_fg)
    bg.stage.addChild(sprite_fg2)
    bg.stage.addChild(sprite_fg3)
    bg.stage.addChild(sprite_fg4)
    bg.stage.addChild(sprite_fg5)
    bg.stage.addChild(sprite_char)
    bg.stage.addChild(sprite_doors[0])
    bg.stage.addChild(sprite_doors[1])
    bg.stage.addChild(sprite_doors[2])
    bg.stage.addChild(sprite_doors[3])
    bg.ticker.add(loop)
})

function setSpritePosition(sprite, x, y) {
    sprite.position.x = x
    sprite.position.y = y
}

function loop() {
    ScrollBg()
    // changeBg()
}

window.addEventListener('keydown', (event) =>
{   
        if(event.code === "ArrowRight")
        {
            bg_speed = -3
            sprite_char.animationSpeed = 0.09
            sprite_char.play()
        }
        else if(event.code === "ArrowLeft")
        {
            bg_speed = +3
            sprite_char.animationSpeed = 0.09
            sprite_char.play()
        }
        else if(event.code === "ArrowDown") {
            bg_speed -= 2000
        }
})

window.addEventListener('keyup', (event) =>
{   
    if(event.code === "ArrowRight")
    {
        bg_speed = 0
        sprite_char.gotoAndStop(0)
    }
    else if(event.code === "ArrowLeft")
    {
        bg_speed = 0 

    }
    else if(event.code === "Space") {
        bg_x = 0
    }
})

function ScrollBg() {
    bg_x += bg_speed
    sprite_bg.position.x = bg_x
    sprite_bg2.position.x = bg_x + 3940
    sprite_bg3.position.x = bg_x + 7880
    sprite_bg4.position.x = bg_x + 11820
    sprite_bg5.position.x = bg_x + 15760
    sprite_doors[0].position.x = bg_x + loader_bg.resources.pl1_bg.texture.width
    sprite_doors[1].position.x = bg_x + 7780
    sprite_doors[2].position.x = bg_x + 11720
    sprite_doors[3].position.x = bg_x + 15660
    sprite_fg.position.x = bg_x
    sprite_fg2.position.x = bg_x + 3940 
    sprite_fg3.position.x = bg_x + 7880 
    sprite_fg4.position.x = bg_x + 11820
    sprite_fg5.position.x = bg_x + 15760 

    if(bg_x < -19000) bg_x = 0
    
}