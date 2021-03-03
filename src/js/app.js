document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("#nav-header").style.padding = "10px";
    document.querySelector("#nav-header").style.background = "#201e1e";
    document.querySelector("#nav-header").style.color = "#ebe8e8";
    document.querySelector("#topButton").style.transform = "translateY(0)";
    document.querySelector("#hamburger").classList.add("scrolling");
  } else {
    document.querySelector("#nav-header").style.padding = "30px";
    document.querySelector("#nav-header").style.background = "rgba(0,0,0,0)";
    document.querySelector("#nav-header").style.color = "#736969";
    document.querySelector("#topButton").style.transform = "translateY(100px)";
    document.querySelector("#hamburger").classList.remove("scrolling");
  }
})

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let counter = 1;
document.querySelector("#radio" + counter).checked = true;
setInterval(() => {
  document.querySelector("#radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 10000); //15000 looks good as well

document.querySelector("#hamburger").addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.querySelector("#right-nav").classList.toggle("active");
  document.querySelector("#header-ip").classList.toggle("active");
});

const copyIP = () => {
  let copyText = document.querySelector("#ip-input");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.querySelector("#copied").innerHTML =
    '<i class="fas fa-check"></i> Copied';
  document.querySelector("copied").classList.add("copied");
}
