let plane = document.getElementById("plane")
let dial = document.getElementById("dial")

document.addEventListener("click", () => {
  plane.style.transform = "translate(100%, -50%) rotate(60deg)"
  plane.style.right = "80%";
  plane.style.top = "25%";
  dial.style.transform = "rotate(60deg)"
  setTimeout(() => {
    plane.style.right = "0%";
    plane.style.top = "35%";
    plane.style.transform = "translate(100%, -50%)"
    dial.style.transform = "none"
    setTimeout(() => {
      plane.style.transition = "4s all"
      plane.style.transform = "translate(100%, -50%) rotate(-30deg)"
      plane.style.right = "80%";
      plane.style.top = "45%";
      dial.style.transform = "rotate(-60deg)"
    }, 2500)
  }, 2500)
})