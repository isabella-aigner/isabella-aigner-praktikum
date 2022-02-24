document.addEventListener("DOMContentLoaded", function(event) {
  var svgContainer = document.getElementById("headerToggle");
  var textContainer = document.getElementById("headerToggleText");
  var toggleBool = false;

  svgContainer.addEventListener('click', function() {
    if(!toggleBool) {
        toggleBool = true;
        document.getElementById("headerToggleSvg").setAttribute("transform", "rotate(90)");
        textContainer.style.display = "block";
    } else {
        toggleBool = false;
        document.getElementById("headerToggleSvg").setAttribute("transform", "rotate(0)");
        textContainer.style.display = "none";
    }
  })
});
