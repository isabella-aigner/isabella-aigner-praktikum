var headImg = document.createElement("div");
headImg.classList.add('w3-content');
headImg.classList.add('w3-display-container');
headImg.setAttribute('id', 'header-top--picture');

console.log(headImg);


headImg.innerHTML = '<img src="https://d33wubrfki0l68.cloudfront.net/c0617321e065a0e6013dd44fce2bd087db57afb6/f8e58/images/headerbilder/header_contact.jpg" alt="Headerimage - Kontakt" class="header-top--slider slider-qf" style="display: block;"><img src="https://d33wubrfki0l68.cloudfront.net/111da9d6a35db069f3a89faa7a1389ba7c341dc2/f20be/images/headerbilder/header_contactquad.jpg" alt="Headerimage - Kontakt" class="header-top--slider slider-quad" style="display: none;">';

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('nav-temp').appendChild(headImg);
});
