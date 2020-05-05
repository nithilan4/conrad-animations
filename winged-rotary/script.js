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
    outerIcon.innerHTML = "<i class='fas fa-2x fa-" + point[2] + "'></i>"
    let innerLabel = document.createElement("span")
    innerLabel.classList.add("inner-label")
    innerLabel.innerText = point[1] + (options.percentOrValue == "percent" ? "%" : "")
    let barBody = document.createElement("div")
    barBody.classList.add("bar-body")
    barBody.style.transition = "3s width"
    titleElement.addEventListener("click", () => {
      barBody.style.width = options.percentOrValue == "percent" ? point[1] + "%" : (point[1] / valueLabelArray.map(x => x[1]).reduce(function(a, b) { return Math.max(a, b); })) * 100 + "%"
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


const valueLabelArray = [["Multicopters", 30, "helicopter"], ["Winged Drones", 85, "plane"]]
createGraph(document.getElementById("graph1"), "Flight times", valueLabelArray, {showLabel: true, percentOrValue: "percent", animated: true})