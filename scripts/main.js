const bg_viewer = document.querySelector(".background")
let bg = new PIXI.Application({
    resizeTo: window,
    view: bg_viewer
})

let themes = 1
const loader_bg = new PIXI.Loader("./assets")
loader_bg.add('background', 'backgrounds/background.png')
loader_bg.add('background2', 'backgrounds/background2.png')
loader_bg.add('ground', 'backgrounds/ground.png')
loader_bg.add('boissier', 'char/fem1.png')
loader_bg.load()
let sprite_char
let sprite_bg
let sprite_ground

let bg_x = 0
let bg_speed = 0

loader_bg.onProgress.add((res) => {
    // console.log(res);
})
loader_bg.onError.add((res) => {
    // console.log(res);
})
loader_bg.onLoad.add((res) => {
    // console.log(res);
})
loader_bg.onComplete.add((loader) => {
    sprite_bg = new PIXI.Sprite(
        loader.resources.background.texture,
        loader.resources.background.texture.width,
        loader.resources.background.texture.height,
        )
    sprite_ground = new PIXI.TilingSprite(
        loader.resources.ground.texture,
        loader.resources.background.texture.width,
        loader.resources.ground.texture.height
        )
    sprite_char = new PIXI.Sprite(
        loader.resources.boissier.texture,
        loader.resources.boissier.texture.width,
        loader.resources.boissier.texture.height
        )
    sprite_ground.position.y = window.innerHeight - 136
    sprite_bg.scale.y = 0.8
    sprite_bg.scale.x = 0.8
    sprite_char.scale.y = 0.15
    sprite_char.scale.x = 0.15
    setSpritePosition(sprite_char, 500, 450)
    bg.stage.addChild(sprite_bg)
    bg.stage.addChild(sprite_ground)
    bg.stage.addChild(sprite_char)
    bg.ticker.add(loop)
})

function setSpritePosition(sprite, x, y) {
    sprite.position.x = x
    sprite.position.y = y
}

function loop() {
    ScrollBg()
    changeBg()
}

window.addEventListener('keydown', (event) =>
{
    console.log(event);
    
    if(event.code === "ArrowRight")
    {
        bg_speed -= 1
    }
    else if(event.code === "ArrowLeft")
    {
        bg_speed += 1 

    }
    else if(event.code === "Space") {
        bg_speed = 0
    }
})

function ScrollBg() {
    bg_x += bg_speed
    sprite_bg.position.x = bg_x
    sprite_ground.tilePosition.x = bg_x / 2
    console.log(sprite_bg.position.x);
}

function changeBg() {
    if (sprite_bg.position.x < -8737 && themes === 1) {
        bg_x = 0
        themes += 1
    } else if (sprite_bg.position.x < -5466 && themes === 2) {
        bg_x = 0
        themes -= 1
    }
    if (themes === 1) {
        sprite_bg.texture = loader_bg.resources.background.texture
    } else {
        sprite_bg.texture = loader_bg.resources.background2.texture
    }
}