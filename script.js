var menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0";
function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "100vh";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// color dot on mouse
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
})


// GSAP code

var tl = gsap.timeline()

// gsap.set("# ")
tl

  .from(" #cursor", {
    height: 100,
    width: 100,
    // y: -50,
    opacity: 0,
    duration: 3,
    delay: 1,
    // stagger: 0.4,
  })
  .from("#main", {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: -500,
  })


  .from("nav", {
    opacity: 0,
    duration: 3,
    delay: 0.5,
    x: 700,
  })
  .from("nav ul li, .ri-menu-2-line", {
    opacity: 0,
    // delay: ,
    duration: 1,
    // x: 70,
    y: -30,
    stagger: 1,
  })
  .from("nav h1", {
    opacity: 0,
    delay: 1,
    y: 50
  })
  .from(" .a", {
    x: 50,
    y: -50,
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: 0.4,
  })
  .from(" #center h2", {
    x: 30,
    // y: -50,
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: 0.4,
  })


  .from("#center #name", {
    duration: 6,
    delay: 1,
    repeat: -1,
    pin: true,
    // opacity: ,
    color: "rgb(251, 94, 94)",
  });

