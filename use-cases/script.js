let jane = document.getElementById("jane")
let fred = document.getElementById("fred")
let airlyft1 = document.getElementById("airlyft1")
let airlyft2 = document.getElementById("airlyft2")
let airlyft3 = document.getElementById("airlyft3")
let beans1 = document.getElementById("beans1")
let beans2 = document.getElementById("beans2")
let us1 = document.getElementById("us1")
let m8fd = document.getElementById("m8fd")
let fire = document.getElementById("fire")
let spray1 = document.getElementById("spray1")
let spray2 = document.getElementById("spray2")
let passiveBox = document.getElementById("passive-box")
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")

document.addEventListener("click", () => {
  document.getElementById("grass").style.bottom = "-20vh";
  fred.style.bottom = "11vh";
  setTimeout(() => {
    fred.style.bottom = "10vh";
  }, 1750)
  let fredInterval = setInterval(() => {
    fred.style.bottom = "11vh";
    setTimeout(() => {
      fred.style.bottom = "10vh";
    }, 1750)
  }, 3500)
  setTimeout(() => {
    document.getElementById("grass").style.boxShadow = "0 0 10px 8px #00a921"
    document.getElementById("grass").style.backgroundColor = "#00a921"
    setTimeout(() => {
      document.getElementById("grass").style.boxShadow = "0 0 0 0 #00841a"
      document.getElementById("grass").style.backgroundColor = "#00841a"
    }, 1750)
  }, 5000)
  setTimeout(() => {
    airlyft1.style.left = "48.5%"
    beans2.style.left = "48.5%"
  }, 8000)
  let agrasInterval = setInterval(() => {
    agras.style.top = "-49vh";
    setTimeout(() => {
      agras.style.top = "-50vh";
    }, 1750)
  }, 3500)
  setTimeout(() => {
    beans2.style.opacity = 0;
    beans2.style.left = "15%";
    airlyft1.style.left = "15%"
    agras.style.transform = "rotate(90deg) translateX(450px) rotate(-90deg)"
    beans1.style.transform = "rotate(90deg) translate(544px, -26%) rotate(-90deg)"
  }, 10000)
  setTimeout(() => {
    beans1.style.opacity = 0;
    document.getElementById("fred-scene").style.filter = "brightness(0.3)";
    document.getElementById("opacity-moment").style.opacity = 0.3;
    airlyft1.style.height = "50vh";
    airlyft1.style.transform = "translate(-50%, -50%)"
    airlyft1.style.left = "50%";
    airlyft1.style.top = "70%";
  }, 13000)
  setTimeout(() => {
    document.getElementById("fred-scene").style.transform = "translateY(100%)"
    document.getElementById("opacity-moment").style.opacity = 1;
    airlyft1.style.transform = "translate(-50%, 100%)"
  }, 20000)
  setTimeout(() => {
    clearInterval(fredInterval)
    clearInterval(agrasInterval)
    document.getElementById("jane-scene").style.transform = "none"
    document.getElementById("ground").style.bottom = "0";
    document.getElementById("building").style.bottom = "17vh";
    jane.style.bottom = "11vh";
    setTimeout(() => {
      jane.style.bottom = "10vh";
    }, 1750)
    let janeInterval = setInterval(() => {
      jane.style.bottom = "11vh";
      setTimeout(() => {
        jane.style.bottom = "10vh";
      }, 1750)
    }, 3500)
    let fireInterval = setInterval(() => {
        fire.style.transform = "translate(-50%, -25%) rotate(-2deg)";
      setTimeout(() => {
        fire.style.transform = "translate(-50%, -25%) rotate(2deg)";
      }, 1750)
    }, 3500)
    setTimeout(() => {
      fire.style.bottom = "2vh"
      us1.style.display = "block";
      spray1.style.display = "block";
    }, 4500)
    let us1Interval = setInterval(() => {
      us1.style.top = "-49vh";
      setTimeout(() => {
        us1.style.top = "-50vh";
      }, 1750)
    }, 3500)
    setTimeout(() => {
      us1.style.transform = "rotate(90deg) translateX(450px) rotate(-90deg)"
      spray1.style.transform = "rotate(90deg) translate(544px, -26%) rotate(-90deg)"
    }, 7500)
    setTimeout(() => {
      spray1.style.opacity = 0;
      us1.style.left = "20%";
      spray1.style.left = "20%";
      airlyft2.style.left = "48.5%"
      spray2.style.left = "48.5%"
    }, 9500)
    setTimeout(() => {
      spray2.style.opacity = 0;
      fire.style.bottom = "5vh";
      fire.style.height = "20vh";
    }, 10500)
    setTimeout(() => {
      document.getElementById("jane-scene").style.filter = "brightness(0.3)";
      document.getElementById("opacity-moment").style.opacity = 0.3
      airlyft2.style.height = "50vh";
      airlyft2.style.transform = "translate(-50%, -50%)"
      airlyft2.style.left = "50%";
      airlyft2.style.top = "70%";
    }, 11500)
    setTimeout(() => {
      clearInterval(janeInterval)
      clearInterval(fireInterval)
      clearInterval(us1Interval)
      document.getElementById("jane-scene").style.transform = "translateY(100%)"
      document.getElementById("opacity-moment").style.opacity = 1;
      airlyft2.style.transform = "translate(-50%, 100%)"
      document.getElementById("robert-scene").style.transform = "none"
      document.getElementById("road").style.bottom = "-15vh";
      robert.style.bottom = "11vh";
      passiveBox.style.bottom = "10vh"
      setTimeout(() => {
        robert.style.bottom = "10vh";
      }, 1750)
      let robertInterval = setInterval(() => {
        robert.style.bottom = "11vh";
        setTimeout(() => {
          robert.style.bottom = "10vh";
        }, 1750)
      }, 3500)
      let m8fdInterval = setInterval(() => {
        m8fd.style.top = "-49vh";
        setTimeout(() => {
          m8fd.style.top = "-50vh";
        }, 1750)
      }, 3500)
      setTimeout(() => {
        m8fd.style.display = "block";
        box1.style.display = "block";
        box2.style.display = "block"
        passiveBox.style.transform = "rotate(15deg) scale(1.2)"
        setTimeout(() => {
          passiveBox.style.transform = "rotate(-15deg) scale(0.8)"
          setTimeout(() => {
            passiveBox.style.transform = "none"
          }, 1750)
        }, 1750)
      }, 4000)
      setTimeout(() => {
        m8fd.style.transform = "rotate(90deg) translateX(450px) rotate(-90deg)"
        box1.style.transform = "rotate(90deg) translate(544px, -26%) rotate(-90deg)"
      }, 8000)
      setTimeout(() => {
        m8fd.style.left = "20%";
        box1.style.left = "20%";
        box1.style.transform = "rotate(90deg) translate(544px, -100%) rotate(-90deg)";
        box2.style.left = "65%";
        box2.style.top = "69%";
        airlyft3.style.left = "65%";
        airlyft3.style.top = "44vh"
      }, 11000)
      setTimeout(() => {
        document.getElementById("robert-scene").style.filter = "brightness(0.3)";
        document.getElementById("opacity-moment").style.opacity = 0.3
        airlyft3.style.height = "50vh";
        airlyft3.style.transform = "translate(-50%, -50%)"
        airlyft3.style.left = "50%";
        airlyft3.style.top = "70%";
      }, 13000)
      setTimeout(() => {
        document.getElementById("robert-scene").style.transform = "translateY(100%)"
        document.getElementById("opacity-moment").style.opacity = 1;
        airlyft3.style.transform = "translate(-50%, 100%)"
      }, 20000)
    }, 18000)
  }, 20000)


  
})