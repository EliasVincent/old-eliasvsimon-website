// most of this is totally not stolen from w3 i swear
console.log("js is working!")

// sticky header currently not working for navbar but floating navbar might be a better choice anyway, I will just leave this here for future reference
window.onscroll = function() {stickyheader()};
let header = document.getElementById("main-header");
let sticky = header.offsetTop;

function stickyheader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  } 


// sticky navbar 
window.onscroll = function() {stickynavbar()};

let navbar = document.getElementById("navbar");
let sticky2 = navbar.offsetTop;


function stickynavbar() {
    // if the page y axis is greater than stick (which is at offset Top)
    if (window.pageYOffset > sticky) {
        // variable navbar which is got the ID navbar, adds the class sticky2 to itself, which triggers the CSS of sticky 2 being sticky at the top
        navbar.classList.add("sticky2");
      } else {
        navbar.classList.remove("sticky2");
      }
}

// dark theme switch button

themeSwitcher = document.getElementById("color-button")
let switcher = document.getElementById("switch-button")

function SwitchFunction() {
  alert("it kinda works???")
}

