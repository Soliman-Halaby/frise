const bg_viewer = document.querySelector(".background")
let bg = new PIXI.Application({
    resizeTo: window,
    view: bg_viewer
})
const loader_bg = new PIXI.Loader("./assets/backgrounds/")
loader_bg.add('background', 'background_02.png')
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
                        loader.resources.background.texture.height
                        )
    sprite_bg.scale.y = 0.7
    sprite_bg.scale.x = 0.7
    bg.stage.addChild(sprite_bg)
    bg.ticker.add(loop)
})


function loop() {
    ScrollBg()
}

function ScrollBg() {
    bg_x += bg_speed
    sprite_bg.tilePosition.x = bg_x
    
}