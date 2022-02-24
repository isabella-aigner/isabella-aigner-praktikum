console.log("mobileNav.js");

document.addEventListener("DOMContentLoaded", function(event) {

  let topSvg = document.getElementById("showPhoneTopMenue");
  let phoneTopMenu = document.getElementById("phone-navi--top-menue-nav");

  let aboutMeInside = document.getElementById("phone-navi--top-menue-aboutMe-nav");
  let showAboutMeInside = document.getElementById("showAboutMeInside");

  let showProjectInside = document.getElementById("showProjectInside");
  let projectInside = document.getElementById("projectInside");

  topSvg.addEventListener("click", function() {
    console.log("topSvg");
    if(phoneTopMenu.style.display === "none") {
      phoneTopMenu.style.display = "block";
    } else {
      phoneTopMenu.style.display = "none";
    }
  })

  showAboutMeInside.addEventListener("click", function() {
    console.log("showAboutMeInside");

    if(aboutMeInside.style.display === "none") {
      aboutMeInside.style.display = "block";
    } else {
      aboutMeInside.style.display = "none";
    }
  })

  showProjectInside.addEventListener("click", function() {
    console.log("showProjectInside");
    if(projectInside.style.display === "none") {
      projectInside.style.display = "block";
    } else {
      projectInside.style.display = "none";
    }
  })

})
