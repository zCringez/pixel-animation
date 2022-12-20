const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
ctx.imageSmoothingEnabled = false
const img = document.querySelector("#character")

let x = 0
let y = 0

function animationLoop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(img, x, y, canvas.width, canvas.height)

    window.requestAnimationFrame(animationLoop)
}

function main() {
    readMapFile("map.txt")
    window.requestAnimationFrame(animationLoop)
}

function drawMapTile(x, y, tileType) {
    console.log(x, y, tileType)
    // Implementiere Kachelzeichnen hier!!!
}

function readMapFile(filename) {
    fetch(filename).then((res) => res.text()).then((data) => {
        let rows = data.split("\n")
        for (let y = 0; y < rows.length; y++) {
            let cells = rows[y].split("")
            for (let x = 0; x < cells.length; x++) {
                
                drawMapTile(x, y, cells[x])

            }
        }
    })
}

main()