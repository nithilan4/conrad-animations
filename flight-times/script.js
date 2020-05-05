function createGraph(graphContainer, title, valueLabelArray, options) {
  let titleElement = document.createElement("h1")
  titleElement.classList.add("graph-title")
  titleElement.innerText = title
  graphContainer.appendChild(titleElement)
  let dataContainer = document.createElement("div")
  dataContainer.classList.add("data-container")
  let barContainer = document.createElement("div")
  barContainer.classList.add("bar-container")
  let labelContainer = document.createElement("div")
  labelContainer.classList.add("label-container")
  barContainer.classList.add("horizontal")
  labelContainer.classList.add("horizontal")

  valueLabelArray.forEach((point) => {
    let bar = document.createElement("div")
    bar.classList.add("bar")
    let label = document.createElement("span")
    label.innerText = point[0]
    label.classList = "bar-label"
    let outerIcon = document.createElement("span")
    outerIcon.classList.add("outer-icon")
    if (point[2] == "bruh") {
      outerIcon.innerHTML = "<img src='https://ecoaero.nithilan4.repl.co/diag.png' style='height: 10vh; margin-left: 18px;'>"
    } else {
      outerIcon.innerHTML = "<img src='https://asset1.djicdn.com/images/360/m600-pro/s2v2/1_0.png' style='height: 10vh; margin-left: -10px;'>"
    }
    
    let innerLabel = document.createElement("span")
    innerLabel.classList.add("inner-label")
    innerLabel.innerHTML = point[1] + "km<br>" + "(" + (point[1] * 0.621371192).toFixed(0) + "mi)"
    let barBody = document.createElement("div")
    barBody.classList.add("bar-body")
    barBody.style.transition = "3s width"
    titleElement.addEventListener("click", () => {
      innerLabel.style.opacity = 1
      barBody.style.width = options.percentOrValue == "percent" ? point[1] + "%" : (point[1] / valueLabelArray.map(x => x[1]).reduce(function(a, b) { return Math.max(a, b); })) * 75 + "%"
    })
    labelContainer.appendChild(label)
    barBody.appendChild(innerLabel)
    bar.appendChild(barBody)
    bar.appendChild(outerIcon)
    barContainer.appendChild(bar)
  })
  dataContainer.appendChild(labelContainer)
  dataContainer.appendChild(barContainer)
  graphContainer.appendChild(dataContainer)
}


const valueLabelArray = [["DJI Matrice 600", 13, "helicopter"], ["EcoAero AirLyft", 55, "bruh"]]
createGraph(document.getElementById("graph1"), "Delivery Range of 5.5kg Package", valueLabelArray, {showLabel: true, percentOrValue: "value", animated: true})