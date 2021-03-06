const nav = document.querySelector(".primary-navigation");
const navBtn = document.querySelector(".menu-toggle");
var navs = nav.getElementsByClassName("navs");
const crewNav = document.querySelector("indicators-crew");
var techNav = document.querySelector("span-nav");


navBtn.addEventListener('click', ()=>{
  const visible = nav.getAttribute('data-visible');
  if (visible === "false"){
    nav.setAttribute('data-visible', true);
    navBtn.setAttribute('aria-expanded', true);
  }else if (visible === "true"){
    nav.setAttribute('data-visible', false);
    navBtn.setAttribute('aria-expanded', false);
  }
});

for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

for (var i = 0; i < crewNav.length; i++) {
  crewNav[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-crew");
    current[0].className = current[0].className.replace(" active-crew", "");
    this.className += " active-crew";
  });
}

for (var i = 0; i < techNav.length; i++) {
  techNav[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-tech");
    current[0].className = current[0].className.replace(" active-tech", "");
    this.className += " active-tech";
  });
}

