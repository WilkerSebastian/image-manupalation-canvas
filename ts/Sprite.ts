class Sprite {

    img: HTMLImageElement
    width: number
    height: number
    x: number
    y: number
    inverteX: boolean
    inverteY: boolean
    brilho: number
    grayscale: number
    colorInvert: number
    opacity: number
    saturacao: number
    sepia: number
    rotate: number
    contraste: number
    corte: []

    constructor(x: number, y: number, width: number, height: number) {

        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.img = new Image()
        this.corte = []
        this.inverteX = false
        this.inverteY = false
        this.brilho = 100
        this.grayscale = 0
        this.colorInvert = 0
        this.opacity = 100
        this.saturacao = 100
        this.sepia = 0
        this.rotate = 0
        this.contraste = 100

    }

    render() {


        ctx.save()
        ctx.filter = `brightness(${this.brilho}%) contrast(${this.contraste}%) grayscale(${this.grayscale}%) hue-rotate(${this.rotate}deg) invert(${this.colorInvert}%) opacity(${this.opacity}%) saturate(${this.saturacao}%) sepia(${this.sepia}%)`

        switch (true) {
            case this.inverteX && !this.inverteY:

                ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
                ctx.scale(-1, 1)
                ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height)

                break;
            case this.inverteY && !this.inverteX:

                ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
                ctx.scale(1, -1)
                ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height)

                break;
            case this.inverteY && this.inverteX:

                ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
                ctx.scale(-1, -1)
                ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height)

                break;
            case this.corte.length == 0:

                ctx.drawImage(this.img, this.x, this.y, this.width, this.height)

                break;
        }
        ctx.restore()

    }

}