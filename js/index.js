var headImg = document.createElement("div");
headImg.classList.add('w3-content');
headImg.classList.add('w3-display-container');
headImg.setAttribute('id', 'header-top--picture');

console.log(headImg);


headImg.innerHTML = '<img class="header-top--slider slider-qf" src="files/images/headerbilder/header_isabella.jpg" alt="Headerimage - Isabella Aigner"><img class="header-top--slider slider-quad" src="files/images/headerbilder/header_isabellaQuad.jpg" alt="Headerimage - Isabella Aigner">';

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('nav-temp').appendChild(headImg);
});
