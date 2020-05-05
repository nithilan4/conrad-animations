let b1 = document.getElementById("battery1")
let b2 = document.getElementById("battery2")
let b3 = document.getElementById("battery3")
let b1t = document.getElementById("b1t")
let b2t = document.getElementById("b2t")
let b3t = document.getElementById("b3t")
let dist = document.getElementById("dist")
let b1l = document.getElementById("b1l")
let b2l = document.getElementById("b2l")
let b3l = document.getElementById("b3l")

let x = 0

document.addEventListener("click", () => {
  c = setInterval(() => {
    x+=0.01
    dist.innerHTML = `Area Covered: ${x.toFixed(2)}km²`
  }, 10)
  
  let d1 = setInterval(() => {
    let r = (100 - (15.8 * x))
    let p = 83.1 - (r * 0.831) + 12 + "%"
    let s = (r < 25 ? "#f00" : r < 60 ? "#ffcc00" : "#0f0");
    b3.style.background = `linear-gradient(#0F0027 ${p}, ${s} ${p})`
    b3t.innerHTML = r.toFixed(1) + "%"
    if (r < 0) {
      b3t.innerHTML = "0%"
      b3l.style.opacity = 1
      clearInterval(d1);
    }
  }, 10);
  
  let d2 = setInterval(() => {
    let r = (100 - (8.37 * x) + (0.159 * (x ** 2)))
    let p = 83.1 - (r * 0.831) + 12 + "%"
    let s = (r < 25 ? "#f00" : r < 60 ? "#ffcc00" : "#0f0");
    b1.style.background = `linear-gradient(#0F0027 ${p}, ${s} ${p})`
    b1t.innerHTML = r.toFixed(1) + "%"
    if (r < 0) {
      b1t.innerHTML = "0%"
      b1l.style.opacity = 1
      clearInterval(d2);
      clearInterval(c)
    }
  }, 10);
  
  let d3 = setInterval(() => {
    let r = (100 - (11.6 * x) + (0.305 * (x ** 2)))
    let p = 83.1 - (r * 0.831) + 12 + "%"
    let s = (r < 25 ? "#f00" : r < 60 ? "#ffcc00" : "#0f0");
    b2.style.background = `linear-gradient(#0F0027 ${p}, ${s} ${p})`
    b2t.innerHTML = r.toFixed(1) + "%"
    if (r < 0) {
      b2t.innerHTML = "0%"
      b2l.style.opacity = 1
      clearInterval(d3);
    }
  }, 10);
})



