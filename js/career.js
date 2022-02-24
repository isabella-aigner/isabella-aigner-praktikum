// header
var headImg = document.createElement("div");
headImg.classList.add('w3-content');
headImg.classList.add('w3-display-container');
headImg.setAttribute('id', 'header-top--picture');

headImg.innerHTML = '<img src="../files/images/headerbilder/header_career_all.jpg" alt="Headerpicture - Werdegang Headerbild" class="header-top--slider slider-qf" style="display: block;"><img src="../files/images/headerbilder/header_career_allQuad.jpg" alt="Headerpicture - Werdegang Headerbild" class="header-top--slider slider-quad" style="display: none;">';

// footer
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
    '<h3><a href="#" title="Impressum">Impressum</a></h3>' + '\n' +
    '<a id="footer--nach-oben" href="#top"><img src="../files/images/index/flaticon_right-arrow.svg" height="15" alt="Pfeil Verlinkung auf Seitenanfang" /></a>' + '\n' +
  '</section>';

// werdegangall

var careerAll = [
    {
        headline: 'Wohnortswechsel',
        time: 'Jan./Feb. 2022',
        description: 'Umzug nach Salzburg',
        icon: '../files/images/werdegang/move_icon.svg',
        alt: 'Umzugs-Icon',
        type: 'move',
        educationCounter: 5,
        workCounter: 6,
    },
    {
      headline: 'Fachhochschule Hagenberg, Medientechnik und Design (BAKK)',
      time: 'Sept. 2018 - Jan. 2022',
      description: 'Abschluss: Bachalor of Science <br /> Kompetenzen: Webentwicklung & -design, Film, Audio, 3D, Online-Marketing, 2D Motion Graphics (etc.)',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 1
  },
  {
      headline: 'Elements New Media Solutions',
      time: 'Feb. 2021 - Aug. 2021',
      description: 'Praktikum im Bereich Web-Developement, Frontend',
      icon: '../files/images/werdegang/internship_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 1
  },
  {
      headline: 'Rotax Maxdome, Linz',
      time: 'Juli 2018 - Sept 2018',
      description: 'Arbeit vor allem beim Empfang und für Kundenbetreuung von Groß- und Kleingruppen, sowie Mithilfe bei größeren Events.',
      icon: '../files/images/werdegang/work_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'work',
      educationCounter: null,
      workCounter: 1
  },
  {
      headline: 'Bäckerei Winkler, Gallneukierchen',
      time: 'Juli 2018 - Sept. 2018',
      description: 'Arbeit als Verkaufsmitarbeiterin, sowie im Café als Servicemitarbeiterin.',
      icon: '../files/images/werdegang/work_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'work',
      educationCounter: null,
      workCounter: 2
  },
  {
      headline: 'MAG Personal GmbH, Linz',
      time: 'April 2018 - Sept. 2018',
      description: 'Servicemitarbeiterin bei Klein- bis Großveranstaltungen und Events, wie z.B. Hochzeiten, Firmenveranstaltungen, etc.',
      icon: '../files/images/werdegang/work_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'work',
      educationCounter: null,
      workCounter: 3
  },
  {
      headline: 'Atikon EDV & Marketing GmbH, Linz',
      time: 'Jänner 2018 - März 2018',
      description: 'Praktikum im Bereich Web-Developement und -design',
      icon: '../files/images/werdegang/internship_icon.svg',
      alt: 'Praktikums-Icon',
      type: 'internship',
      educationCounter: 2,
      workCounter: 4
  },
  {
      headline: 'Illuskills Wien',
      time: 'Sept. 2017 - Juli. 2018',
      description: 'Lehrgang für Medienillustration (berufsbegleitend)',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 3,
      workCounter: null,
  },
  {
      headline: 'Weiterbildung am bit Schulungscenter, Linz',
      time: 'Sept. 2017 - Dez. 2017',
      description: 'ECDL Web Editing (HTML5, CSS3, Responsive), ECDL Powerpoint Advance',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 4,
      workCounter: null,
  },
  {
      headline: 'INVENT Marketing und Tourismus GmbH, Linz',
      time: 'Okt. 2016 - April 2017',
      description: 'Interne Marketingabteilung, Grafik & Design',
      icon: '../files/images/werdegang/work_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'work',
      educationCounter: null,
      workCounter: 5,
  },
  {
      headline: 'Wohnortswechsel',
      time: 'Sept. 2016',
      description: 'Umzug nach Traun',
      icon: '../files/images/werdegang/move_icon.svg',
      alt: 'Umzugs-Icon',
      type: 'move',
      educationCounter: 5,
      workCounter: 6,
  },
  {
      headline: 'Roco Modelleisenbahn Holding GmbH, Bergheim',
      time: 'Mai 2015 - Juli 2016',
      description: 'Interne Marketingabteilung, Grafik & Design',
      icon: '../files/images/werdegang/work_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'work',
      educationCounter: null,
      workCounter: 7,
  },
  {
      headline: 'Wiberg GmbH, Salzburg',
      time: 'Feb. 2015 - April. 2015',
      description: 'Praktikum, Interne Grafik, Grafik & Design',
      icon: '../files/images/werdegang/internship_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'internship',
      educationCounter: 6,
      workCounter: 8,
  },
  {
      headline: 'Wiberg GmbH, Salzburg',
      time: 'Feb. 2015 - April. 2015',
      description: 'Praktikum, Interne Grafik, Grafik & Design',
      icon: '../files/images/werdegang/internship_icon.svg',
      alt: 'Praktikums-Icon',
      type: 'internship',
      educationCounter: 7,
      workCounter: 9,
  },
  {
      headline: 'Maya Inspiranto Werbeagentur, Salzburg',
      time: 'Juli. 2014 - Sept. 2014',
      description: 'Urlaubsvertretung, Grafik & Design',
      icon: '../files/images/werdegang/work_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'work',
      educationCounter: null,
      workCounter: 10,
  },
  {
      headline: 'Werbe-Design-Akademie (WDA), Wifi Salzburg',
      time: 'Okt. 2010 - Juni 2014',
      description: 'Abschluss: Diplom im Bereich Kommunikationsdesign',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'education',
      educationCounter: 8,
      workCounter: null,
  },
  {
      headline: 'Maya Inspiranto Werbeagentur, Salzburg',
      time: 'Juli 2013 - Sept. 2013',
      description: 'Berufspraktikum, Grafik & Design',
      icon: '../files/images/werdegang/internship_icon.svg',
      type: 'internship',
      alt: 'Praktikums-Icon',
      educationCounter: 9,
      workCounter: 11,
  },
  {
      headline: 'Bäckerei und Konditorei Flöckner, Salzburg Gnigl',
      time: 'Aug. 2012 - März 2013',
      description: 'Teilzeitmitarbeiterin im Verkauf und Café',
      icon: '../files/images/werdegang/work_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'work',
      educationCounter: null,
      workCounter: 12,
  },
  {
      headline: 'Café-Restaurant & Pizzeria Papageno, St. Gilgen',
      time: 'Mai 2012 - Juli 2012',
      description: 'Ferialmitarbeitern, Eisverkauf und Service',
      icon: '../files/images/werdegang/work_icon.svg',
      alt: 'Arbeits-Icon',
      type: 'work',
      educationCounter: null,
      workCounter: 13,
  },
  {
      headline: 'Schnupperpraktika Grafik & Design',
      time: 'Jän. 2012 - März 2012',
      description: 'Herkules-Artworks Werbeagentur Linz, Maya Inspiranto Werbeagentur Salzburg',
      icon: '../files/images/werdegang/internship_icon.svg',
      alt: 'Praktikums-Icon',
      type: 'internship',
      educationCounter: 10,
      workCounter: 14,
  },
  {
      headline: 'FiT - Frauen in Handwerk und Technik, BFI Salzburg',
      time: 'Nov. 2011 - Feb. 2012',
      description: 'Weiterbildung/Neuorientierung',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 11,
      workCounter: null,
  },
  {
      headline: 'Fachhochschule Salzburg Urstein, MultiMediaArt (MMA)',
      time: 'Okt. 2008 - Dez. 2010',
      description: 'Spezialisierung: Audio/Audiotechnik, kein Abschluss',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 12,
      workCounter: null,
  },
  {
      headline: 'Orff-Institut, Salzburg',
      time: 'Nov. 2007 - Juni 2008',
      description: 'Außerordentliche Hörerin elementare Musik- und Tanzpädagogin (Überbrückung)',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 13,
      workCounter: null,
  },
  {
      headline: 'Bundesrealstufengymnasium, Salzburg',
      time: 'Sept. 2003 - Juni 2007',
      description: 'Musischer Zweig, Abschluss: Matura',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 14,
      workCounter: null,
  },
  {
      headline: 'Volks- und Hauptschulausbildung, Faistenau',
      time: 'Sept. 1995 - Juni 2003',
      description: 'Grundschulausbildung',
      icon: '../files/images/werdegang/education_icon.svg',
      alt: 'Ausbildungs-Icon',
      type: 'education',
      educationCounter: 15,
      workCounter: null,
  }
]

var hobbyAll = [
    {
        headline: 'Musikschule Traun: Gesangsunterricht',
        time: 'Sept. 2017 - Juli 2018',
        icon: '../files/images/werdegang/hobbyeducation_icon.svg',
        alt: 'Hobby-Ausbildung-Icon',
        type: 'hobbyEducation',
        educationCounter: 1,
        workCounter: null,
    },
    {
        headline: 'Sommerakademie Faistenau: Experimentelle Acrylmalerei, Portraitmalerei',
        time: 'Juli 2007',
        icon: '../files/images/werdegang/hobbyeducation_icon.svg',
        alt: 'Hobby-Ausbildung-Icon',
        type: 'hobbyEducation',
        educationCounter: 2,
        workCounter: null,
    },
    {
        headline: 'Sommerakademie Faistenau: Experimentelle Acrylmalerei',
        time: 'Juli 2007',
        icon: '../files/images/werdegang/hobbyeducation_icon.svg',
        alt: 'Hobby-Ausbildung-Icon',
        type: 'hobbyEducation',
        educationCounter: 3,
        workCounter: null,
    },
    {
        headline: 'Musikum Salzburg: Gesangsunterricht',
        time: '2008 - 2009',
        icon: '../files/images/werdegang/hobbyeducation_icon.svg',
        alt: 'Hobby-Ausbildung-Icon',
        type: 'hobbyEducation',
        educationCounter: 4,
        workCounter: null,
    },
    {
        headline: 'Musikum Salzburg/Hof: Klavierunterricht, 1. und 2. Übertrittsprüfung',
        time: '1995 - 2008',
        icon: '../files/images/werdegang/hobbyeducation_icon.svg',
        alt: 'Hobby-Ausbildung-Icon',
        type: 'hobbyEducation',
        educationCounter: 5,
        workCounter: null,
    },
    {
        headline: 'Gasthof zur Post, Faistenau: Dinnermusikbegleitung (Klavier)',
        time: '2003 - 2007',
        alt: 'Hobby-Arbeit-Icon',
        icon: '../files/images/werdegang/hobbywork_icon.svg',
        type: 'hobbyWork',
        educationCounter: null,
        workCounter: 1,
    },
]

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('nav-temp').appendChild(headImg);
  document.getElementById('footer-area').appendChild(footerDiv);

  var container = document.getElementById("werdegang all");
  var containerFree = document.getElementById("werdegang-freizeit");

  var careerWerdegang = document.getElementById("btn-werdegang");
  var careerAusbildung = document.getElementById("btn-ausbildung");
  var careerArbeit = document.getElementById("btn-arbeit");

  careerAll.forEach(function(item, index) {
    // outer element
    let werdegangInfo = document.createElement("div");
    werdegangInfo.classList.add("werdegang-info");
    if (index%2 === 0) {
      werdegangInfo.classList.add("bg-light");
    } else {
      werdegangInfo.classList.add("bg-dark");
    }

    // left
    let werdegangIcon = document.createElement("div");
    werdegangIcon.classList.add("werdegang-icon");

    let normalize = document.createElement("div");
    normalize.classList.add("normalize");

    let img = document.createElement("img");
    img.src = item.icon;
    img.alt =item.alt;

    normalize.appendChild(img);
    werdegangIcon.appendChild(normalize);
    werdegangInfo.appendChild(werdegangIcon);

    // right
    let werdegangText = document.createElement("div");
    werdegangText.classList.add("werdegang-text");

    let werdegangH3 = document.createElement("h3");
    werdegangH3.classList.add("werdegang-h3");
    werdegangH3.innerHTML = item.headline;

    let werdegangTime = document.createElement("p");
    werdegangTime.classList.add("werdegang-time");
    werdegangTime.innerHTML = item.time;

    let werdegangBeschreibung = document.createElement("p");
    werdegangBeschreibung.classList.add("werdegang-beschreibung"),
    werdegangBeschreibung.innerHTML = item.description;

    werdegangText.appendChild(werdegangH3);
    werdegangText.appendChild(werdegangTime);
    werdegangText.appendChild(werdegangBeschreibung);
    werdegangInfo.appendChild(werdegangText);

    container.appendChild(werdegangInfo);
  });

  hobbyAll.forEach(function(item, index) {
    //outer element
    let werdegangInfo = document.createElement("div");
    werdegangInfo.classList.add("werdegang-info");
    werdegangInfo.classList.add("werdegang-info");
    if (index%2 === 0) {
      werdegangInfo.classList.add("bg-light-alpha");
    } else {
      werdegangInfo.classList.add("bg-dark-alpha");
    }

    //Left
    let werdegangIconHobby = document.createElement("div");
    werdegangIconHobby.classList.add("werdegang-icon-hobby");

    let normalize = document.createElement("div");
    normalize.classList.add("normalize");

    let img = document.createElement("img");
    img.src = item.icon;
    img.alt =item.alt;

    normalize.appendChild(img);
    werdegangIconHobby.appendChild(normalize);
    werdegangInfo.appendChild(werdegangIconHobby);

    //right
    let werdegangTextHobby = document.createElement("div");
    werdegangTextHobby.classList.add("werdegang-text-hobby");

    let werdegangH3 = document.createElement("h3");
    werdegangH3.classList.add("werdegang-h3");
    werdegangH3.innerHTML = item.headline;

    let werdegangTime = document.createElement("p");
    werdegangTime.classList.add("werdegang-time");
    werdegangTime.innerHTML = item.time;

    werdegangTextHobby.appendChild(werdegangH3);
    werdegangTextHobby.appendChild(werdegangTime);
    werdegangInfo.appendChild(werdegangTextHobby);

    containerFree.appendChild(werdegangInfo);
  });

careerWerdegang.addEventListener('click', function() {
  console.log("btn careerWerdegang");

  if (careerAusbildung.classList.contains('active')) {
    careerAusbildung.classList.remove('active');
  }
  if (careerArbeit.classList.contains('active')) {
    careerArbeit.classList.remove('active');
  }

  if(!careerWerdegang.classList.contains('acitve')) {
    careerWerdegang.classList.add('active');

    headImg.innerHTML = "";
    headImg.innerHTML = '<img src="../files/images/headerbilder/header_career_all.jpg" alt="Headerpicture - Werdegang Headerbild" class="header-top--slider slider-qf" style="display: block;"><img src="../files/images/headerbilder/header_career_allQuad.jpg" alt="Headerpicture - Werdegang Headerbild" class="header-top--slider slider-quad" style="display: none;">';

    container.innerHTML = "";
    careerAll.forEach(function(item, index) {
      // outer element
      let werdegangInfo = document.createElement("div");
      werdegangInfo.classList.add("werdegang-info");
      if (index%2 === 0) {
        werdegangInfo.classList.add("bg-light");
      } else {
        werdegangInfo.classList.add("bg-dark");
      }

      // left
      let werdegangIcon = document.createElement("div");
      werdegangIcon.classList.add("werdegang-icon");

      let normalize = document.createElement("div");
      normalize.classList.add("normalize");

      let img = document.createElement("img");
      img.src = item.icon;
      img.alt =item.alt;

      normalize.appendChild(img);
      werdegangIcon.appendChild(normalize);
      werdegangInfo.appendChild(werdegangIcon);

      // right
      let werdegangText = document.createElement("div");
      werdegangText.classList.add("werdegang-text");

      let werdegangH3 = document.createElement("h3");
      werdegangH3.classList.add("werdegang-h3");
      werdegangH3.innerHTML = item.headline;

      let werdegangTime = document.createElement("p");
      werdegangTime.classList.add("werdegang-time");
      werdegangTime.innerHTML = item.time;

      let werdegangBeschreibung = document.createElement("p");
      werdegangBeschreibung.classList.add("werdegang-beschreibung"),
      werdegangBeschreibung.innerHTML = item.description;

      werdegangText.appendChild(werdegangH3);
      werdegangText.appendChild(werdegangTime);
      werdegangText.appendChild(werdegangBeschreibung);
      werdegangInfo.appendChild(werdegangText);

      container.appendChild(werdegangInfo);
    });

    containerFree.innerHTML = "";
    hobbyAll.forEach(function(item, index) {
      //outer element
      let werdegangInfo = document.createElement("div");
      werdegangInfo.classList.add("werdegang-info");
      werdegangInfo.classList.add("werdegang-info");
      if (index%2 === 0) {
        werdegangInfo.classList.add("bg-light-alpha");
      } else {
        werdegangInfo.classList.add("bg-dark-alpha");
      }

      //Left
      let werdegangIconHobby = document.createElement("div");
      werdegangIconHobby.classList.add("werdegang-icon-hobby");

      let normalize = document.createElement("div");
      normalize.classList.add("normalize");

      let img = document.createElement("img");
      img.src = item.icon;
      img.alt =item.alt;

      normalize.appendChild(img);
      werdegangIconHobby.appendChild(normalize);
      werdegangInfo.appendChild(werdegangIconHobby);

      //right
      let werdegangTextHobby = document.createElement("div");
      werdegangTextHobby.classList.add("werdegang-text-hobby");

      let werdegangH3 = document.createElement("h3");
      werdegangH3.classList.add("werdegang-h3");
      werdegangH3.innerHTML = item.headline;

      let werdegangTime = document.createElement("p");
      werdegangTime.classList.add("werdegang-time");
      werdegangTime.innerHTML = item.time;

      werdegangTextHobby.appendChild(werdegangH3);
      werdegangTextHobby.appendChild(werdegangTime);
      werdegangInfo.appendChild(werdegangTextHobby);

      containerFree.appendChild(werdegangInfo);
    });
  }
})

careerAusbildung.addEventListener('click', function() {
  console.log("btn careerAusbildung");

  if (careerWerdegang.classList.contains('active')) {
    careerWerdegang.classList.remove('active');
  }
  if (careerArbeit.classList.contains('active')) {
    careerArbeit.classList.remove('active');
  }

  if(!careerAusbildung.classList.contains('acitve')) {
    careerAusbildung.classList.add('active');

    headImg.innerHTML = "";
    headImg.innerHTML = '<img src="../files/images/headerbilder/header_career_education.jpg" alt="Headerpicture - Ausbildung Headerbild" class="header-top--slider slider-qf" style="display: block;"><img src="../files/images/headerbilder/header_career_educationQuad.jpg" alt="Headerpicture - Ausbildung Headerbild" class="header-top--slider slider-quad" style="display: none;">';

    container.innerHTML = "";
    let i = 0;
    careerAll.forEach(function(item, index) {
      // outer element
      let werdegangInfo = document.createElement("div");
      werdegangInfo.classList.add("werdegang-info");

      if(item.type === "education" || item.type === "internship" || item.type === "move") {
        if (i%2 === 0) {
          werdegangInfo.classList.add("bg-light");
        } else {
          werdegangInfo.classList.add("bg-dark");
        }

        // left
        let werdegangIcon = document.createElement("div");
        werdegangIcon.classList.add("werdegang-icon");

        let normalize = document.createElement("div");
        normalize.classList.add("normalize");

        let img = document.createElement("img");
        img.src = item.icon;
        img.alt =item.alt;

        normalize.appendChild(img);
        werdegangIcon.appendChild(normalize);
        werdegangInfo.appendChild(werdegangIcon);

        // right
        let werdegangText = document.createElement("div");
        werdegangText.classList.add("werdegang-text");

        let werdegangH3 = document.createElement("h3");
        werdegangH3.classList.add("werdegang-h3");
        werdegangH3.innerHTML = item.headline;

        let werdegangTime = document.createElement("p");
        werdegangTime.classList.add("werdegang-time");
        werdegangTime.innerHTML = item.time;

        let werdegangBeschreibung = document.createElement("p");
        werdegangBeschreibung.classList.add("werdegang-beschreibung"),
        werdegangBeschreibung.innerHTML = item.description;

        werdegangText.appendChild(werdegangH3);
        werdegangText.appendChild(werdegangTime);
        werdegangText.appendChild(werdegangBeschreibung);
        werdegangInfo.appendChild(werdegangText);

        container.appendChild(werdegangInfo);

        i++;
      }

    });

    containerFree.innerHTML = "";
    hobbyAll.forEach(function(item, index) {
      //outer element
      let werdegangInfo = document.createElement("div");
      werdegangInfo.classList.add("werdegang-info");
      werdegangInfo.classList.add("werdegang-info");

      if (item.type === "hobbyEducation") {
        if (i%2 === 0) {
          werdegangInfo.classList.add("bg-light-alpha");
        } else {
          werdegangInfo.classList.add("bg-dark-alpha");
        }

        //Left
        let werdegangIconHobby = document.createElement("div");
        werdegangIconHobby.classList.add("werdegang-icon-hobby");

        let normalize = document.createElement("div");
        normalize.classList.add("normalize");

        let img = document.createElement("img");
        img.src = item.icon;
        img.alt =item.alt;

        normalize.appendChild(img);
        werdegangIconHobby.appendChild(normalize);
        werdegangInfo.appendChild(werdegangIconHobby);

        //right
        let werdegangTextHobby = document.createElement("div");
        werdegangTextHobby.classList.add("werdegang-text-hobby");

        let werdegangH3 = document.createElement("h3");
        werdegangH3.classList.add("werdegang-h3");
        werdegangH3.innerHTML = item.headline;

        let werdegangTime = document.createElement("p");
        werdegangTime.classList.add("werdegang-time");
        werdegangTime.innerHTML = item.time;

        werdegangTextHobby.appendChild(werdegangH3);
        werdegangTextHobby.appendChild(werdegangTime);
        werdegangInfo.appendChild(werdegangTextHobby);

        containerFree.appendChild(werdegangInfo);

        i++;
      }
    });
  }
})

careerArbeit.addEventListener('click', function() {
  console.log("btn careerArbeit");

  if (careerWerdegang.classList.contains('active')) {
    careerWerdegang.classList.remove('active');
  }
  if (careerAusbildung.classList.contains('active')) {
    careerAusbildung.classList.remove('active');
  }

  if(!careerArbeit.classList.contains('acitve')) {
    careerArbeit.classList.add('active');

    headImg.innerHTML = "";
    headImg.innerHTML = '<img src="../files/images/headerbilder/header_career_work.jpg" alt="Headerpicture - Arbeit Headerbild" class="header-top--slider slider-qf" style="display: block;"><img src="../files/images/headerbilder/header_career_workQuad.jpg" alt="Headerpicture - Arbeit Headerbild" class="header-top--slider slider-quad" style="display: none;">';

    container.innerHTML = "";
    let i = 0;
    careerAll.forEach(function(item, index) {
      // outer element
      let werdegangInfo = document.createElement("div");
      werdegangInfo.classList.add("werdegang-info");

      if(item.type === "work" || item.type === "internship" || item.type === "move") {
        if (i%2 === 0) {
          werdegangInfo.classList.add("bg-light");
        } else {
          werdegangInfo.classList.add("bg-dark");
        }

        // left
        let werdegangIcon = document.createElement("div");
        werdegangIcon.classList.add("werdegang-icon");

        let normalize = document.createElement("div");
        normalize.classList.add("normalize");

        let img = document.createElement("img");
        img.src = item.icon;
        img.alt =item.alt;

        normalize.appendChild(img);
        werdegangIcon.appendChild(normalize);
        werdegangInfo.appendChild(werdegangIcon);

        // right
        let werdegangText = document.createElement("div");
        werdegangText.classList.add("werdegang-text");

        let werdegangH3 = document.createElement("h3");
        werdegangH3.classList.add("werdegang-h3");
        werdegangH3.innerHTML = item.headline;

        let werdegangTime = document.createElement("p");
        werdegangTime.classList.add("werdegang-time");
        werdegangTime.innerHTML = item.time;

        let werdegangBeschreibung = document.createElement("p");
        werdegangBeschreibung.classList.add("werdegang-beschreibung"),
        werdegangBeschreibung.innerHTML = item.description;

        werdegangText.appendChild(werdegangH3);
        werdegangText.appendChild(werdegangTime);
        werdegangText.appendChild(werdegangBeschreibung);
        werdegangInfo.appendChild(werdegangText);

        container.appendChild(werdegangInfo);

        i++;
      }

    });

    containerFree.innerHTML = "";
    i2 = 0;
    hobbyAll.forEach(function(item, index) {
      //outer element
      let werdegangInfo = document.createElement("div");
      werdegangInfo.classList.add("werdegang-info");
      werdegangInfo.classList.add("werdegang-info");

      if (item.type === "hobbyWork") {
        if (i2%2 === 0) {
          werdegangInfo.classList.add("bg-light-alpha");
        } else {
          werdegangInfo.classList.add("bg-dark-alpha");
        }
        //Left
        let werdegangIconHobby = document.createElement("div");
        werdegangIconHobby.classList.add("werdegang-icon-hobby");

        let normalize = document.createElement("div");
        normalize.classList.add("normalize");

        let img = document.createElement("img");
        img.src = item.icon;
        img.alt =item.alt;

        normalize.appendChild(img);
        werdegangIconHobby.appendChild(normalize);
        werdegangInfo.appendChild(werdegangIconHobby);

        //right
        let werdegangTextHobby = document.createElement("div");
        werdegangTextHobby.classList.add("werdegang-text-hobby");

        let werdegangH3 = document.createElement("h3");
        werdegangH3.classList.add("werdegang-h3");
        werdegangH3.innerHTML = item.headline;

        let werdegangTime = document.createElement("p");
        werdegangTime.classList.add("werdegang-time");
        werdegangTime.innerHTML = item.time;

        werdegangTextHobby.appendChild(werdegangH3);
        werdegangTextHobby.appendChild(werdegangTime);
        werdegangInfo.appendChild(werdegangTextHobby);

        containerFree.appendChild(werdegangInfo);
        i2++;
      }
    });
  }

})

});
