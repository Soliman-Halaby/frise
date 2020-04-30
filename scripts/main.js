const bg_viewer = document.querySelector(".background")
let bg = new PIXI.Application({
    resizeTo: window,
    view: bg_viewer
})

const loader_bg = new PIXI.Loader("./assets/backgrounds/")
loader_bg.add('background', 'background_02.png')
loader_bg.add('ground', 'ground.png')
loader_bg.load()
// let texture_bg
let sprite_bg
let bg_x = 0
let bg_speed = -5

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
    sprite_bg = new PIXI.TilingSprite(
                        loader.resources.background.texture,
                        loader.resources.background.texture.width,
                        loader.resources.background.texture.height,
                        )

                        
    sprite_bg.scale.y = 0.7
    sprite_bg.scale.x = 0.7
    bg.stage.addChild(sprite_bg)
    // bg.ticker.add(loop)
})

// loader_bg.onComplete.add((loader) => {
//     sprite_bg = new PIXI.TilingSprite(
//                         loader.resources.ground.texture,
//                         loader.resources.ground.texture.width,
//                         loader.resources.ground.texture.height,
//                         )
//     bg.stage.addChild(ground_bg)
//     // bg.ticker.add(loop)
// })

// function loop() {
//     ScrollBg()
// }

window.addEventListener('keydown', (event) =>
{
    if(event.keyCode === 39)
    {
        bg_x += bg_speed
        sprite_bg.tilePosition.x = bg_x * 2
        sprite_bg2.tilePosition.x = bg_x * 2

    }
    else if(event.keyCode === 37)
    {
        bg_x -= bg_speed
        sprite_bg.tilePosition.x = bg_x * 2
        sprite_bg2.tilePosition.x = bg_x * 2

    }
})

// function ScrollBg() {
//     bg_x += bg_speed
//     sprite_bg.tilePosition.x = bg_x
    
// }







const loader_bg2 = new PIXI.Loader("./assets/backgrounds/")
loader_bg2.add('background', 'ground.png')
loader_bg2.load()
let sprite_bg2

loader_bg2.onComplete.add((loader) => {
    sprite_bg2 = new PIXI.TilingSprite(
                        loader.resources.background.texture,
                        loader.resources.background.texture.width,
                        loader.resources.background.texture.height
                        )
    // sprite_bg2.scale.y = 0.7
    // sprite_bg2.scale.x = 0.7
    bg.stage.addChild(sprite_bg2)
    // bg.ticker.add(loop)
})
