$("#inverte-x").on("change", () => {

    sprite.inverteX = !sprite.inverteX

})
$("#inverte-y").on("change", () => {

    sprite.inverteY = !sprite.inverteY

})
$("#brilho").on("change", () => {

    sprite.brilho = Number($("#brilho").val())

})
$("#contraste").on("change", () => {

    sprite.contraste = Number($("#contraste").val()) 

})
$("#grayscale").on("change", () => {

    sprite.grayscale = Number($("#grayscale").val())


})
$("#colorInvert").on("change", () => {

    sprite.colorInvert = Number($("#colorInvert").val())

})
$("#opacity").on("change", () => {

    sprite.opacity = Number($("#opacity").val())

})
$("#saturacao").on("change", () => {

    sprite.saturacao = Number($("#saturacao").val())

})
$("#sepia").on("change", () => {

    sprite.sepia = Number($("#sepia").val())

})
$("#rotate").on("change", () => {

    sprite.rotate = Number($("#rotate").val())
    $("#rotate").css("filter", `hue-rotate(${$("#rotate").val()}deg)`)

})

const fundo = new Image()
fundo.src = "./img/fundo.webp"

fundo.onload = () => window.requestAnimationFrame(loop) 

function loop() {

    ctx.drawImage(fundo , 0 , 0)

    sprite.render()    

    window.requestAnimationFrame(loop)

}