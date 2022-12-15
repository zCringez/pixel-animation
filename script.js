const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const img = document.querySelector("#character")

let x = 0
let y = 0

function animationLoop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(img, x, y, canvas.width, canvas.height)

    window.requestAnimationFrame(animationLoop)
}

function main() {
    window.requestAnimationFrame(animationLoop)
}

main()