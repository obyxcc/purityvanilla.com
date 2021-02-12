window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-header").style.padding = "10px";
    document.getElementById("nav-header").style.background = "#201e1e";
    document.getElementById("nav-header").style.color = "#ebe8e8";
    document.getElementById("topButton").style.transform = "translateY(0)";
  } else {
    document.getElementById("nav-header").style.padding = "30px";
    document.getElementById("nav-header").style.background = "rgba(0,0,0,0)";
    document.getElementById("nav-header").style.color = "#736969";
    document.getElementById("topButton").style.transform = "translateY(100px)";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 15000);

document.getElementById("hamburger").addEventListener("click", toggleNav);
function toggleNav() {
  hamburger.classList.toggle("active");
  document.getElementById("right-nav").classList.toggle("active");
  document.getElementById("topButton").classList.toggle("active");
}
