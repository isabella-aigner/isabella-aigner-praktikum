var footerDiv = document.createElement("div");
footerDiv.classList.add('site_width');
footerDiv.classList.add('height_center');
footerDiv.classList.add('base-site-grid-14');

footerDiv.innerHTML = '<section class="base-site-grid-layout" id="footer--grid">' + '\n' +
    '<div id="footer--kontakt">' + '\n' +
      '<p> Isabella Aigner<br>Grafik & Design</p>' + '\n' +
      '<p>' + '\n' +
        'Tel: <a href="tel:069911314663">0699 113 14 663</a><br>' + '\n' +
        '  Mail: <a href="mailto:isabella.c.aigner.gmail.com&subject=Nachricht%20durch%20Kontaktformulare&amp;body=Sehr%20geehrte%20Frau%20Aigner&sbquo;" target="_top">isabella.c.aigner.gmail.com</a>' + '\n' +
      '</p>' + '\n' +
    '</div>' + '\n' +
    '<h3><a href="../html/impressum.html" title="Impressum" class="menu-impressum">Impressum</a></h3>' + '\n' +
    '<a id="footer--nach-oben" href="#top"><img src="../files/images/index/flaticon_right-arrow.svg" height="15" alt="Pfeil Verlinkung auf Seitenanfang" /></a>' + '\n' +
  '</section>';

  document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('footer-area').appendChild(footerDiv);
  });
