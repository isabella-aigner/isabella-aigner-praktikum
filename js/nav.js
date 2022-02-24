var nav = document.createElement("div");
nav.classList.add('base-site-grid-14');
nav.setAttribute('id', 'nav-site-rows');

console.log("navHTML.js");

nav.innerHTML = '<!--------------------- desktop navi--------------------------->' + '\n' +
  '<ul id="header-top--navi" class="base-site-grid-5 desktopNavi">' + '\n' +
    '\n' +
      '<!---------------------Logo Navigation-------------------->' + '\n' +
      '<li id="naviLogo">' + '\n' +
          '<div class="normalize">' + '\n' +
              '<a href="../index.html">' + '\n' +
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 252.8 187.4" enable-background="new 0 0 252.8 187.4" xml:space="preserve">' + '\n' +
                  '<circle class="naviLogo-white" fill="#FFFFFF" cx="117.8" cy="93.7" r="87"/>' + '\n' +
                  '<g opacity="0.5">' + '\n' +
                    '<path class="naviLogo-transp" fill="#808285" d="M12.6,140.5c8.6-0.7,132.5-51.3,158.2-87.3l11.9-8.3c2.6,2,4.6,7.6,0,21.6s-23.1,45-33.6,49.6 c-10.5,4.6-28.9,12.5-50,9.2c0,0,29.6-5.3,46.7-21.1s29-33.9,30.3-37.7c1.3-3.8-87,68-130.5,74C2.1,146.4,12.6,140.5,12.6,140.5z" />' + '\n' +
                    '<path class="naviLogo-transp" fill="#808285" d="M185.4,73.2l-21.2,52.1c0,0,4.6,4.6,18.5,0c13.8-4.6,62.6-39.2,62.6-39.2s-17.1,5.6-21.1,7.9 s-51.4,35.9-49.4,26.7c2-9.2,19.8-54.2,19.8-54.2L185.4,73.2z"/>' + '\n' +
                  '</g>' + '\n' +
                  '<path class="naviLogo-black" d="M8.6,138.5c8.6-0.7,132.5-51.3,158.2-87.3l11.9-8.3c2.6,2,4.6,7.6,0,21.6c-4.6,14-23.1,45-33.6,49.6 c-10.5,4.6-28.9,12.5-50,9.2c0,0,29.6-5.3,46.7-21.1s29-33.9,30.3-37.7s-87,68-130.5,74C-1.9,144.4,8.6,138.5,8.6,138.5z"/>' + '\n' +
                  '<path class="naviLogo-black" d="M181.4,71.2l-21.2,52.1c0,0,4.6,4.6,18.5,0c13.8-4.6,62.6-39.2,62.6-39.2s-17.1,5.6-21.1,7.9s-51.4,35.9-49.4,26.7 c2-9.2,19.8-54.2,19.8-54.2L181.4,71.2z"/>' + '\n' +
                '</svg>' + '\n' +
              '</a>' + '\n' +
          '</div>' + '\n' +
      '</li>' + '\n' +
      '<!-----------------------Navigationspunkte--------------------------->' + '\n' +
      '<li id="desktop-navi--top-aboutMe">' + '\n' +
          '<a href="#"> Über Isabella </a>' + '\n' +
          '<div id="desktop-navi--top-aboutMe-nav">' + '\n' +
              '<ul>' + '\n' +
                  '<li><a id="menu-aboutMe" href="../index.html#about-isabella-h2">Kurzvorstellung</a></li>' + '\n' +
                  '<li><a id="menu-career" href="career.html#werdegang-introduction">Werdegang</a></li>' + '\n' +
                  '<li><a id="menu-career" href="career.html#werdegang-skills">Kompetenzen</a></li>' + '\n' +
                  '<li><a id="menu-downloads" href="download.html">Downloads</a></li>' + '\n' +
              '</ul>' + '\n' +
          '</div>' + '\n' +
      '</li>' + '\n' +
      '<li id="desktop-navi--top-projects">' + '\n' +
          '<a href="#"> Projekte </a>' + '\n' +
          '<div id="desktop-navi--top-projects-nav">' + '\n' +
              '<ul>' + '\n' +
                '<li id="menu-web"><a href="web.html">Web</a></li>' + '\n' +
                '<li id="menu-print"><a href="print.html">Print</a></li>' + '\n' +
                '<li id="menu-corporateDesign"><a href="corporateDesign.html">Corporate Design</a></li>' + '\n' +
                '<li id="menu-freeProjects"><a href="freieProjekte.html">Freie Projekte</a></li>' + '\n' +
              '</ul>' + '\n' +
          '</div>' + '\n' +
      '</li>' + '\n' +
      '<li id="desktop-navi--top-contact"> <a href="contact.html">Kontakt</a> </li>' + '\n' +
  '</ul>' + '\n' +
  '<!--------------------- phone navi--------------------------->' + '\n' +
  '<ul id="header-top--navi" class="base-site-grid-2 phoneNavi">' + '\n' +
  '\n' +
      '<!---------------------Logo Navigation-------------------->' + '\n' +
      '<li id="naviLogo">' + '\n' +
          '<div class="normalize">' + '\n' +
              '<a href="../index.html">' + '\n' +
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 252.8 187.4" enable-background="new 0 0 252.8 187.4" xml:space="preserve">' + '\n' +
                  '<circle class="naviLogo-white" fill="#FFFFFF" cx="117.8" cy="93.7" r="87"/>' + '\n' +
                  '<g opacity="0.5">' + '\n' +
                    '<path class="naviLogo-transp" fill="#808285" d="M12.6,140.5c8.6-0.7,132.5-51.3,158.2-87.3l11.9-8.3c2.6,2,4.6,7.6,0,21.6s-23.1,45-33.6,49.6 c-10.5,4.6-28.9,12.5-50,9.2c0,0,29.6-5.3,46.7-21.1s29-33.9,30.3-37.7c1.3-3.8-87,68-130.5,74C2.1,146.4,12.6,140.5,12.6,140.5z" />' + '\n' +
                    '<path class="naviLogo-transp" fill="#808285" d="M185.4,73.2l-21.2,52.1c0,0,4.6,4.6,18.5,0c13.8-4.6,62.6-39.2,62.6-39.2s-17.1,5.6-21.1,7.9 s-51.4,35.9-49.4,26.7c2-9.2,19.8-54.2,19.8-54.2L185.4,73.2z"/>' + '\n' +
                  '</g>' + '\n' +
                  '<path class="naviLogo-black" d="M8.6,138.5c8.6-0.7,132.5-51.3,158.2-87.3l11.9-8.3c2.6,2,4.6,7.6,0,21.6c-4.6,14-23.1,45-33.6,49.6 c-10.5,4.6-28.9,12.5-50,9.2c0,0,29.6-5.3,46.7-21.1s29-33.9,30.3-37.7s-87,68-130.5,74C-1.9,144.4,8.6,138.5,8.6,138.5z"/>' + '\n' +
                  '<path class="naviLogo-black" d="M181.4,71.2l-21.2,52.1c0,0,4.6,4.6,18.5,0c13.8-4.6,62.6-39.2,62.6-39.2s-17.1,5.6-21.1,7.9s-51.4,35.9-49.4,26.7 c2-9.2,19.8-54.2,19.8-54.2L181.4,71.2z"/>' + '\n' +
                '</svg>' + '\n' +
              '</a>' + '\n' +
          '</div>' + '\n' +
      '</li>' + '\n' +
      '<!-----------------------Navigationspunkte--------------------------->' + '\n' +
      '<li id="phone-navi--top-menue">' + '\n' +
          '<a id="showPhoneTopMenue"  href="#">' + '\n' +
              '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 124 124" width="100%" height="100%" xml:space="preserve" fill="white" style="width: 40px; height: 30px;">' + '\n' +
                  '<g>' + '\n' +
                      '<path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>' + '\n' +
                      '<path d="M112,50H12C5.4,50,0,55.4,0,62s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,50,112,50z"/>' + '\n' +
                      '<path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>' + '\n' +
                  '</g>' + '\n' +
              '</svg>' + '\n' +
          '</a>' + '\n' +
          '<div style="display: none;" id="phone-navi--top-menue-nav">' + '\n' +
              '<ul id="phone-navi--top-menue-aboutMe">' + '\n' +
                  '<li><a id="showAboutMeInside" href="#">Über Isabella</a>' + '\n' +
                      '<ul id="phone-navi--top-menue-aboutMe-nav" style="display:none;">' + '\n' +
                          '<li><a id="menu-aboutMe" href="../index.html#about-isabella-h2">Kurzvorstellung</a></li>' + '\n' +
                          '<li><a id="menu-career" href="career.html#werdegang-introduction">Werdegang</a></li>' + '\n' +
                          '<li><a id="menu-career" href="career.html#werdegang-skills">Kompetenzen</a></li>' + '\n' +
                          '<li><a id="menu-downloads" href="download.html">Downloads</a></li>' + '\n' +
                      '</ul>' + '\n' +
                  '</li>' + '\n' +
                  '<li><a id="showProjectInside" href="#">Projekte</a>' + '\n' +
                      '<ul id="projectInside" style="display: none;">' + '\n' +
                          '<li id="menu-web"><a href="web.html">Web</a></li>' + '\n' +
                          '<li id="menu-print"><a href="/print.html">Print</a></li>' + '\n' +
                          '<li id="menu-cd"><a href="corporateDesign.html">Corporate Design</a></li>' + '\n' +
                          '<li id="menu-freeProjects"><a href="freieProjekte.html">Freie Projekte</a></li>' + '\n' +
                      '</ul>' + '\n' +
                  '</li>' + '\n' +
                  '<li id="menu-contact"><a href="contact.html">Kontakt</a></li>' + '\n' +
              '</ul>' + '\n' +
          '</div>' + '\n' +
      '</li>' + '\n' +
  '</ul>';

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('nav-temp').appendChild(nav);
});
