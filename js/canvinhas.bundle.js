"use strict";
class Sprite {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.corte = [];
        this.inverteX = false;
        this.inverteY = false;
        this.brilho = 100;
        this.grayscale = 0;
        this.colorInvert = 0;
        this.opacity = 100;
        this.saturacao = 100;
        this.sepia = 0;
        this.rotate = 0;
        this.contraste = 100;
    }
    render() {
        ctx.save();
        ctx.filter = `brightness(${this.brilho}%) contrast(${this.contraste}%) grayscale(${this.grayscale}%) hue-rotate(${this.rotate}deg) invert(${this.colorInvert}%) opacity(${this.opacity}%) saturate(${this.saturacao}%) sepia(${this.sepia}%)`;
        switch (true) {
            case this.inverteX && !this.inverteY:
                ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
                ctx.scale(-1, 1);
                ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
                break;
            case this.inverteY && !this.inverteX:
                ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
                ctx.scale(1, -1);
                ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
                break;
            case this.inverteY && this.inverteX:
                ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
                ctx.scale(-1, -1);
                ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
                break;
            case this.corte.length == 0:
                ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
                break;
        }
        ctx.restore();
    }
}
const canvas = document.getElementById("canvas");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const ctx = canvas.getContext("2d");
const sprite = new Sprite(0, 0, WIDTH, HEIGHT);
const imagem = $("#imagem");
imagem.on("change", (event) => {
    const reader = new FileReader();
    reader.onload = function () {
        sprite.img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});
$("#inverte-x").on("change", () => {
    sprite.inverteX = !sprite.inverteX;
});
$("#inverte-y").on("change", () => {
    sprite.inverteY = !sprite.inverteY;
});
$("#brilho").on("change", () => {
    sprite.brilho = Number($("#brilho").val());
});
$("#contraste").on("change", () => {
    sprite.contraste = Number($("#contraste").val());
});
$("#grayscale").on("change", () => {
    sprite.grayscale = Number($("#grayscale").val());
});
$("#colorInvert").on("change", () => {
    sprite.colorInvert = Number($("#colorInvert").val());
});
$("#opacity").on("change", () => {
    sprite.opacity = Number($("#opacity").val());
});
$("#saturacao").on("change", () => {
    sprite.saturacao = Number($("#saturacao").val());
});
$("#sepia").on("change", () => {
    sprite.sepia = Number($("#sepia").val());
});
$("#rotate").on("change", () => {
    sprite.rotate = Number($("#rotate").val());
    $("#rotate").css("filter", `hue-rotate(${$("#rotate").val()}deg)`);
});
const fundo = new Image();
fundo.src = "./img/fundo.webp";
fundo.onload = () => window.requestAnimationFrame(loop);
function loop() {
    ctx.drawImage(fundo, 0, 0);
    sprite.render();
    window.requestAnimationFrame(loop);
}
