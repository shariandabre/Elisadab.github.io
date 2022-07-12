const nav =document.querySelector("#work");
const navtoggle =document.querySelector(".work01");
const about =document.querySelector(".about02");
const contact =document.querySelector(".contact03");


navtoggle.addEventListener("click",() =>{
  const wrk = navtoggle.getAttribute("aria-expanded");

  if(wrk=="false"){
    navtoggle.setAttribute("aria-expanded","true");
    document.getElementById("about02").style.visibility = "hidden";
    document.getElementById("contact03").style.visibility = "hidden";
    document.getElementById("social").style.visibility = "hidden";
    document.getElementById("work").style.backgroundColor = "white";
    document.getElementById("work_grid").style.display = "flex";
    nav.setAttribute("data-visible", "true");

  }else if(wrk=="true"){
    navtoggle.setAttribute("aria-expanded","false");
    document.getElementById("about02").style.visibility = "visible";
    document.getElementById("contact03").style.visibility = "visible";
    document.getElementById("social").style.visibility = "visible";
    document.getElementById("work_grid").style.display = "none";
    nav.setAttribute("data-visible", "false");

  }
  });

about.addEventListener("click",() =>{
const abt = about.getAttribute("aria-expanded1");
if(abt=="false"){
  about.setAttribute("aria-expanded1","true");
  document.getElementById("work01").style.visibility = "hidden";
  document.getElementById("contact03").style.visibility = "hidden";
  document.getElementById("social").style.visibility = "hidden";
  document.getElementById("work").style.backgroundColor = "#F6FFA4";
  nav.setAttribute("data-visible", "true");

}else if(abt=="true"){
  about.setAttribute("aria-expanded1","false");
  document.getElementById("work01").style.visibility = "visible";
  document.getElementById("contact03").style.visibility = "visible";
  document.getElementById("social").style.visibility = "visible";
  nav.setAttribute("data-visible", "false");

}
});

contact.addEventListener("click",() =>{
  const cont = contact.getAttribute("aria-expanded2");
  if(cont=="false"){
    contact.setAttribute("aria-expanded2","true");
    document.getElementById("work01").style.visibility = "hidden";
    document.getElementById("about02").style.visibility = "hidden";
    document.getElementById("social").style.visibility = "hidden";
    document.getElementById("work").style.backgroundColor = "#D9D7F1";
    nav.setAttribute("data-visible", "true");
  
  }else if(cont=="true"){
    contact.setAttribute("aria-expanded2","false");
    document.getElementById("work01").style.visibility = "visible";
    document.getElementById("about02").style.visibility = "visible";
    document.getElementById("social").style.visibility = "visible";
    nav.setAttribute("data-visible", "false");
  
  }
  });

  const navbar = document.querySelector("#navbar");
  const navbtn = document.querySelector(".menu");
  
  navbtn.addEventListener("click", () => {
    const open = navbar.getAttribute("visible");
    const expand = navtoggle.getAttribute("aria-expand");
    if (open == "false") {
      navbar.setAttribute("visible", "true");
      navbtn.setAttribute("aria-expand", "true");
    } else if (open == "true") {
      navbar.setAttribute("visible", "false");
      navbtn.setAttribute("aria-expand", "flase");
    }
  });
  
/*------resize stopper-------*/

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
