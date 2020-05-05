let graphContainer = document.getElementById("graph1")
let rect = document.getElementById("canvas").getBoundingClientRect();
let price = document.getElementById("price")
const canvasY = rect.bottom 
const canvasX = rect.left

function createGraph() {
    graphContainer.appendChild(document.querySelector(".data-container"))
    graphContainer.addEventListener("click", () => {
        price.style.opacity = 1
        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "#4BE046";
        ctx.imageSmoothingEnabled = true;
        ctx.moveTo(3, 460);
        let x = 0
        let y;
        var drawInterval = setInterval(() => {
            x += 1
            y = 460 - (5.80*(1.3178**(x/200))) * 19
            ctx.lineTo(x, y);
            ctx.moveTo(x,460)
            ctx.lineTo(x, y);
            ctx.stroke();
            if (x > 1000) {
                clearInterval(textInterval)
                clearInterval(drawInterval)
                clearInterval(labelInterval)
                document.getElementById(5).style.opacity = 1
                
            }
        },1)
        price.style.left = x + 140 + "px"
        price.style.top = canvasY - 65 - (5.80*(1.3178**(x/200))) * 19 + "px";
        price.style.opacity = 1
        let textInterval = setInterval(() => {
            price.innerText = "$" + (5.80*(1.3178**(x/200))).toFixed(2) + " billion"
            price.style.top = canvasY - 65 - (5.80*(1.3178**(x/200))) * 19 + "px";
            price.style.left = x + 140 + "px"
        }, 8)
        let lastLabel = -1
        let labelInterval = setInterval(() => {
            if (Math.ceil(x / 250) != lastLabel) {
                document.getElementById(Math.ceil(x / 250)).style.opacity = 1;
                lastLabel = Math.ceil(x / 250)
            }
        }, 100)
    })
}


createGraph()