const canvas = document.getElementById("canvas") as HTMLCanvasElement
const WIDTH = canvas.width
const HEIGHT = canvas.height

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

const sprite = new Sprite(0 , 0, WIDTH , HEIGHT)

const imagem = $("#imagem") as JQuery<HTMLInputElement>

imagem.on("change", (event) => {

    const reader = new FileReader();
    reader.onload = function(){
        sprite.img.src = reader.result as string
    };
    reader.readAsDataURL((event.target.files as FileList)[0]);

});