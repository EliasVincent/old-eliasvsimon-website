console.log("js is working!");

// sticky navbar 
window.onscroll = function() {stickynavbar()};

let navbar = document.getElementById("navbar");
let sticky2 = navbar.offsetTop;

function stickynavbar() {
    // if the page y axis is greater than sticky2 (which is at offset Top)
    if (window.pageYOffset > sticky2) {
        // variable navbar which is got the ID navbar, adds the class sticky2 to itself, which triggers the CSS of sticky 2 being sticky at the top
        navbar.classList.add("sticky2");
      } else {
        navbar.classList.remove("sticky2");
      }
}


// dark theme switcher everything in one!!! and I now kinda get how it works
document.getElementById('switch-button').addEventListener('click', function () {
  let darkThemeEnabled = document.body.classList.toggle('light-theme');
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});


// local storage for remembering if dark theme is enabled
if (localStorage.getItem('dark-theme-enabled')) {
  document.body.classList.remove('light-theme');
} /* BROKEN ;_; else {
  document.body.classList.add('light-theme');
} */