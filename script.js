const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

let x = 0
let y = 200

function animationLoop () {
    ctx.clearRect(0, 0, 640, 480)

    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.rect(x++, y, 50, 50)
    ctx.fill()

    window.requestAnimationFrame(animationLoop)
}

function main() {
    window.requestAnimationFrame(animationLoop)
}

main()