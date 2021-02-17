window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-header").style.padding = "10px";
    document.getElementById("nav-header").style.background = "#201e1e";
    document.getElementById("nav-header").style.color = "#ebe8e8";
    document.getElementById("topButton").style.transform = "translateY(0)";
		document.getElementById("hamburger").classList.add("scrolling")
  } else {
    document.getElementById("nav-header").style.padding = "30px";
    document.getElementById("nav-header").style.background = "rgba(0,0,0,0)";
    document.getElementById("nav-header").style.color = "#736969";
    document.getElementById("topButton").style.transform = "translateY(100px)";
		document.getElementById("hamburger").classList.remove("scrolling")
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var counter = 1;
document.getElementById("radio" + counter).checked = true;
setInterval(function () {
	document.getElementById("radio" + counter).checked = true;
	counter++;
	if (counter > 4) {
		counter = 1;
	}
}, 10000); //15000 looks good as well

document.getElementById("hamburger").addEventListener("click", toggleNav);
function toggleNav() {
  hamburger.classList.toggle("active");
  document.getElementById("right-nav").classList.toggle("active");
  document.getElementById("topButton").classList.toggle("active");
}

function copyIP() {
  var copyText = document.getElementById("ip-input");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

	document.getElementById("copied").innerHTML = '<i class="fas fa-check"></i> Copied';
	document.getElementById("copied").classList.add("copied");
}
