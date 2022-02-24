var headImg = document.createElement("div");
headImg.classList.add('w3-content');
headImg.classList.add('w3-display-container');
headImg.setAttribute('id', 'header-top--picture');

console.log(headImg);


headImg.innerHTML = '<img src="https://d33wubrfki0l68.cloudfront.net/20bab44f25922950891ad985d3594eaecbdc4a10/6401a/images/headerbilder/header_isabella.jpg" alt="Headerimage - Isabella Aigner" class="header-top--slider slider-qf" style="display: block;"><img src="https://d33wubrfki0l68.cloudfront.net/a8b8343e44ae3082367f536dd9132ca3ca47b0c3/f7ca8/images/headerbilder/header_isabellaquad.jpg" alt="Headerimage - Isabella Aigner" class="header-top--slider slider-quad" style="display: none;">';

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('nav-temp').appendChild(headImg);
});
