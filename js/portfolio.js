new Vue({
    el: '#portfolioVue',

    data: {
        /*all sites*/
        aboutMePage: true,
        careerPage: false,
        newsPage: false,
        contactPage: false,

        projectPageAdvertising: false,
        projectPageCD: false,
        projectPagePrint: false,
        projectPagePackaging: false,
        projectPageWeb: false,
        projectPagePhotography: false,
        projectPage3D: false,
        projectPageIllustration: false,
        projectPageFreeProjects: false,

        /*career*/
        buttonActiveAll: true,
        buttonActiveEducation: false,
        buttonActiveWork: false,

        headerPicture: 'images/headerbilder/header_career_all.jpg',
        headerPictureQuad: 'images/headerbilder/header_career_allQuad.jpg',
        headerPictureTitle: 'Headerpicture - Werdegang Headerbild',

        counterWerdegang: 1,
        counterHobby: 1,

        werdegangArray: [
            {
                headline: 'Fachhochschule Hagenberg, Medientechnik und Design (BAKK)',
                time: 'Sept. 2018 - fortlaufend',
                description: 'Der MTD-Studiengang bietet die perfekte Verbindung zwischen technik und kreativem Design. Das Hauptaugenmerk liegt hier für Isabella im Webentwicklungsbereich (Frontend, Backend-Frameworks, etc.), um diese auch mit ihren bisherigen Kompetenzen kombinieren zu können.',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'education',
                educationCounter: 1
            },
            {
                headline: 'Rotax Maxdome, Linz',
                time: 'Juli 2018 - Sept 2018',
                description: 'Die Arbeit umfasste vor allem Tätigkeiten am Empfang und als Kassiererin, sowie bei der Kundenbetreuung von Groß- und Kleingruppen und der Mithilfe bei größeren Events.',
                icon: 'images/werdegang/work_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'work',
                educationCounter: null,
                workCounter: 1
            },
            {
                headline: 'Bäckerei Winkler, Gallneukirchen',
                time: 'Juli 2018 - Sept. 2018',
                description: 'Arbeit als Verkaufsmitarbeiterin, sowie im Café als Servicemitarbeiterin.',
                icon: 'images/werdegang/work_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'work',
                educationCounter: null,
                workCounter: 2
            },
            {
                headline: 'MAG Personal GmbH, Linz',
                time: 'April 2018 - Sept. 2018',
                description: 'Servicemitarbeiterin bei Klein- bis Großveranstaltungen und Events, wie z.B. Hochzeiten, Firmenveranstaltungen, etc.',
                icon: 'images/werdegang/work_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'work',
                educationCounter: null,
                workCounter: 3
            },
            {
                headline: 'Atikon EDV & Marketing GmbH, Linz',
                time: 'Jänner 2018 - März 2018',
                description: 'Praktikum im Bereich Web-Developement und -design',
                icon: 'images/werdegang/internship_icon.svg',
                alt: 'Praktikums-Icon',
                type: 'internship',
                educationCounter: 2,
                workCounter: 4
            },
            {
                headline: 'Illuskills Wien',
                time: 'Sept. 2017 - Juli. 2018',
                description: 'Lehrgang für Medienillustration (berufsbegleitend)',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'education',
                educationCounter: 3,
                workCounter: null,
            },
            {
                headline: 'Weiterbildung am bit Schulungscenter, Linz',
                time: 'Sept. 2017 - Dez. 2017',
                description: 'Web Editing (HTML5, CSS3, Webseitenoptimierung für verschiedene Endgeräte)',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'education',
                educationCounter: 4,
                workCounter: null,
            },
            {
                headline: 'INVENT Marketing und Tourismus GmbH, Linz',
                time: 'Okt. 2016 - April 2017',
                description: 'Interne Marketingabteilung, Grafik & Design',
                icon: 'images/werdegang/work_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'work',
                educationCounter: null,
                workCounter: 5,
            },
            {
                headline: 'Wohnortswechsel',
                time: 'Sept. 2016',
                description: 'Umzug nach Traun',
                icon: 'images/werdegang/move_icon.svg',
                alt: 'Umzugs-Icon',
                type: 'move',
                educationCounter: 5,
                workCounter: 6,
            },
            {
                headline: 'Roco Modelleisenbahn Holding GmbH, Bergheim Salzburg',
                time: 'Mai 2015 - Juli 2016',
                description: 'Interne Marketingabteilung, Grafik & Design',
                icon: 'images/werdegang/work_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'work',
                educationCounter: null,
                workCounter: 7,
            },
            {
                headline: 'Wiberg GmbH, Salzburg',
                time: 'Feb. 2015 - April. 2015',
                description: 'Praktikum, Interne Grafik, Grafik & Design',
                icon: 'images/werdegang/internship_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'internship',
                educationCounter: 6,
                workCounter: 8,
            },
            {
                headline: 'Maya Inspiranto Werbeagentur, Salzburg',
                time: 'Juli. 2014 - Sept. 2014',
                description: 'Urlaubsvertretung, Grafik & Design',
                icon: 'images/werdegang/work_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'work',
                educationCounter: null,
                workCounter: 9,
            },
            {
                headline: 'Werbe-Design-Akademie (WDA), Wifi Salzburg',
                time: 'Okt. 2012 - Juni 2014',
                description: 'Abschluss: Diplom im Bereich Kommunikationsdesign',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'education',
                educationCounter: 7,
                workCounter: null,
            },
            {
                headline: 'Maya Inspiranto Werbeagentur, Salzburg',
                time: 'Juli 2013 - Sept. 2013',
                description: 'Berufspraktikum, Grafik & Design',
                icon: 'images/werdegang/internship_icon.svg',
                type: 'internship',
                alt: 'Praktikums-Icon',
                educationCounter: 8,
                workCounter: 10,
            },
            {
                headline: 'Bäckerei und Konditorei Flöckner, Salzburg Gnigl',
                time: 'Aug. 2012 - März 2013',
                description: 'Teilzeitmitarbeiterin im Verkauf und als Cafémitarbeiterin',
                icon: 'images/werdegang/work_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'work',
                educationCounter: null,
                workCounter: 11,
            },
            {
                headline: 'Café-Restaurant & Pizzeria Papageno, St. Gilgen',
                time: 'Mai 2012 - Juli 2012',
                description: 'Ferialmitarbeiterin im Eisverkauf und Service',
                icon: 'images/werdegang/work_icon.svg',
                alt: 'Arbeits-Icon',
                type: 'work',
                educationCounter: null,
                workCounter: 12,
            },
            {
                headline: 'Schnupperpraktika Grafik & Design',
                time: 'Jän. 2012 - März 2012',
                description: 'Herkules-Artworks Werbeagentur Linz, Maya Inspiranto Werbeagentur Salzburg',
                icon: 'images/werdegang/internship_icon.svg',
                alt: 'Praktikums-Icon',
                type: 'internship',
                educationCounter: 9,
                workCounter: 13,
            },
            {
                headline: 'FiT - Frauen in Handwerk und Technik, BFI Salzburg',
                time: 'Nov. 2011 - Feb. 2012',
                description: 'Weiterbildung/Neuorientierung',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'education',
                educationCounter: 10,
                workCounter: null,
            },
            {
                headline: 'Fachhochschule Salzburg Urstein, MultiMediaArt (MMA)',
                time: 'Okt. 2008 - Dez. 2010',
                description: 'Spezialisierung: Audio/Audiotechnik, kein Abschluss',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'education',
                educationCounter: 11,
                workCounter: null,
            },
            {
                headline: 'Orff-Institut, Salzburg',
                time: 'Nov. 2007 - Juni 2008',
                description: 'Außerordentliche Hörerin elementare Musik- und Tanzpädagogin (Überbrückung bis zum MMA-Beginn)',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'education',
                educationCounter: 12,
                workCounter: null,
            },
            {
                headline: 'Bundesrealstufengymnasium, Salzburg',
                time: 'Sept. 2003 - Juni 2007',
                description: 'Musischer Zweig, Abschluss: Matura',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'education',
                educationCounter: 13,
                workCounter: null,
            },
            {
                headline: 'Volks- und Hauptschulausbildung, Faistenau',
                time: 'Sept. 1995 - Juni 2003',
                description: 'Grundschulausbildung',
                icon: 'images/werdegang/education_icon.svg',
                alt: 'Ausbildungs-Icon',
                type: 'education',
                educationCounter: 14,
                workCounter: null,
            },
        ],
        hobbyWerdegangArray: [
            {
                headline: 'Musikschule Traun: Gesangsunterricht',
                time: 'Sept. 2017 - Juli 2018',
                icon: 'images/werdegang/hobbyeducation_icon.svg',
                alt: 'Hobby-Ausbildung-Icon',
                type: 'hobbyEducation',
                educationCounter: 1,
                workCounter: null,
            },
            {
                headline: 'Sommerakademie Faistenau: Experimentelle Acrylmalerei, Portraitmalerei',
                time: 'Juli 2007',
                icon: 'images/werdegang/hobbyeducation_icon.svg',
                alt: 'Hobby-Ausbildung-Icon',
                type: 'hobbyEducation',
                educationCounter: 2,
                workCounter: null,
            },
            {
                headline: 'Sommerakademie Faistenau: Experimentelle Acrylmalerei',
                time: 'Juli 2007',
                icon: 'images/werdegang/hobbyeducation_icon.svg',
                alt: 'Hobby-Ausbildung-Icon',
                type: 'hobbyEducation',
                educationCounter: 3,
                workCounter: null,
            },
            {
                headline: 'Musikum Salzburg: Gesangsunterricht',
                time: '2008 - 2009',
                icon: 'images/werdegang/hobbyeducation_icon.svg',
                alt: 'Hobby-Ausbildung-Icon',
                type: 'hobbyEducation',
                educationCounter: 4,
                workCounter: null,
            },
            {
                headline: 'Musikum Salzburg/Hof: Klavierunterricht, 1. und 2. Übertrittsprüfung abgeschlossen',
                time: '1995 - 2008',
                icon: 'images/werdegang/hobbyeducation_icon.svg',
                alt: 'Hobby-Ausbildung-Icon',
                type: 'hobbyEducation',
                educationCounter: 5,
                workCounter: null,
            },
            {
                headline: 'Gasthof zur Post, Faistenau: Dinnermusikbegleitung (Klavier)',
                time: '2003 - 2007',
                alt: 'Hobby-Arbeit-Icon',
                icon: 'images/werdegang/hobbywork_icon.svg',
                type: 'hobbyWork',
                educationCounter: null,
                workCounter: 1,
            },
        ],

        /*project subpages*/
        projectSinglePage: false,

        heartbeat: false,
        sbgLandespreis: false,
        tube: false,
        untersbergbahn: false,
        hajimaru: false,

        invent: false,
        roco: false,
        wiberg: false,
        inspiranto: false,

        cruiseMissilesRoyality: false,
        lindtPraline: false,
        zitronella: false,

        plantbase: false,
        gameShop: false,
        steuerkanzleiKaufmann: false,

        hdrPhoto: false,
        republicPhoto: false,
        capoeiraPhoto: false,
        landschaftPhoto: false,
        makroPhoto: false,
        characterPhoto: false,
        houseMachinePhoto: false,

        rouka3D: false,
        hexeninsel3D: false,
        fraktale3D: false,

        nightdrifterIllu: false,
        creatureDesignIllu: false,
        drawingsIllu: false,
        sketchesIllu: false,

        hoerfunkspots: false,
        tvSpots: false,
        deutscheStories: false,
        englischeStories: false,

        plakate: false,

        /*actual page*/
        actualPage: 'aboutMePage',

        /*news*/
        newsArticleArray: [
            {
                id: 'studiumBeruf2020',
                title: 'Studium & Beruf',
                date: '09.09.2020',
                picture: 'images/news/articles/beruf_und_arbeit.jpg',
                pictureQF: 'images/news/articles/beruf_und_arbeitQF.jpg',
                alt: 'Studium und Beruf Imagebild',
                shortDescriptiion: 'Leidenschaft und Kreativität hat Isabella Aigner auf ihren Weg gebracht und den Wunsch geweckt auch Richtung Multimedia und Webentwicklung arbeiten zu können, weshalb Sie zur Zeit das Bachelorstudium "Medientechnik und -design" an der Fachhochschule Oberösterreich absolviert. Hier holt sie sich weitere Fähigkeiten, wie z.B. Webentwicklung...',
                description: 'Leidenschaft und Kreativität hat Isabella Aigner auf ihren Weg gebracht und den Wunsch geweckt auch Richtung Multimedia und Webentwicklung arbeiten zu können, weshalb Sie zur Zeit das Bachelorstudium "Medientechnik und -design" an der Fachhochschule Oberösterreich absolviert. Hier holt sie sich weitere Fähigkeiten, wie z.B. Webentwicklung und Wissen zu speziellen Webtechnologien, sowie multimediale Techniken zu 3D, Motion Graphics, Visual Effects (& Videoschnitt) u.ä. hinzu, um diese dann auch später im Multimediabereich einsetzen zu können.',
            },
        ],

        /*toggle project text*/
        houseMachineText: false,
        hajimaruText: false,
        tubeText: false,
        cruiseMissilesRoyalityText: false,
        irisText: false,
        plantBaseText: false,
        steuerkanzleiText: false,
        lostColorsText: false,
        escapeRoomText: false,

        creativeWritingFree: false,
        writingBlindtext: false,
        writing40Grad: false,
        writingEscape: false,
        writingChaos: false,
        writingFairy: false,
        writingWords: false,

        audioFree: false,
        audioMeerLeben: false,
        audioSubitorato: false,
        audioSnippets: false,

        animationFree: false,
        animationDragons: false,
        animationPetCat: false,
        animation3DTest: false,
        animationSnippets: false,

        gamesFree: false,
        irisIllu: false,
        gamesLostColors: false,
        gamesEscapeRoom: false,

        downloadPage: false,
        imprintPage: false,

        phoneMenueTop: 'none',
        aboutMeInside: 'none',
        projectInside: 'none',
    },
    methods: {
        showPhoneTopMenue: function() {
            if(this.phoneMenueTop === 'none') {
                this.phoneMenueTop = 'block';
            } else {
                this.phoneMenueTop = 'none';
            }
        },
        showAboutMeInside: function() {
            if(this.aboutMeInside === 'none') {
                this.aboutMeInside = 'block';
                this.phoneMenueTop = 'block';
                this.projectInside = 'none';
            } else {
                this.aboutMeInside = 'none';
            }
        },
        showProjectInside: function() {
            if(this.projectInside === 'none') {
                this.projectInside = 'block';
                this.phoneMenueTop = 'block';
                this.aboutMeInside = 'none';
            } else {
                this.projectInside = 'none';
            }
        },

        /*change "sites"*/
        goToAboutMe: function() {
            if(this.aboutMePage === false) {
                this.resetSites();
                this.aboutMePage = true;
            }
        },
        goToCareer: function() {
            if(this.careerPage === false) {
                this.resetSites();
                this.careerPage = true;
            }
        },
        goToContact: function() {
            if(this.contactPage === false) {
                this.resetSites();
                this.contactPage = true;
            }
        },
        goToNews: function() {
            if(this.newsPage === false) {
                this.resetSites();
                this.newsPage = true;
            }
        },

        /*projec categories*/
        goToProjectCD: function() {
            if(this.projectPageCD === false) {
                this.resetSites();
                this.projectPageCD = true;
            }
        },
        goToProjectAdvertising: function() {
            if(this.projectPageAdvertising === false) {
                this.resetSites();
                this.projectPageAdvertising = true;
            }
        },
        goToProjectPrint: function() {
            if(this.projectPagePrint === false) {
                this.resetSites();
                this.projectPagePrint = true;
            }
        },
        goToProjectPackaging: function() {
            if(this.projectPagePackaging === false) {
                this.resetSites();
                this.projectPagePackaging = true;
            }
        },
        goToProjectWeb: function() {
            if(this.projectPageWeb === false) {
                this.resetSites();
                this.projectPageWeb = true;
            }
        },
        goToProjectPhotography: function() {
            if(this.projectPagePhotography === false) {
                this.resetSites();
                this.projectPagePhotography = true;
            }
        },
        goToProject3D: function() {
            if(this.projectPage3D === false) {
                this.resetSites();
                this.projectPage3D = true;
            }
        },
        goToProjectIllustration: function() {
            if(this.projectPageIllustration === false) {
                this.resetSites();
                this.projectPageIllustration = true;
            }
        },
        goToProjectFreeProjects: function() {
            if(this.projectPageFreeProjects === false) {
                this.resetSites();
                this.projectPageFreeProjects = true;
            }
        },

        /*projects*/
        goToHeartBeat: function() {
            if(this.heartbeat === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.heartbeat = true;
            }
        },
        goToSbgLandespreis: function() {
            if(this.sbgLandespreis === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.sbgLandespreis = true;
            }
        },
        goToTube: function() {
            if(this.tube === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.tube = true;
            }
        },
        goToUntersbergbahn: function() {
            if(this.untersbergbahn === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.untersbergbahn = true;
            }
        },
        goToHajimaru: function() {
            if(this.hajimaru === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.hajimaru = true;
            }
        },

        goToInvent: function() {
            if(this.invent === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.invent = true;
            }
        },
        goToRoco: function() {
            if(this.roco === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.roco = true;
            }
        },
        goToWiberg: function() {
            if(this.wiberg === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.wiberg = true;
            }
        },
        goToInspiranto: function() {
            if(this.inspiranto === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.inspiranto = true;
            }
        },

        goToPlakate: function() {
            if(this.plakate === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.plakate = true;
            }
        },

        goToCruiseMisselesRoyality: function() {
            if(this.cruiseMissilesRoyality === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.cruiseMissilesRoyality = true;
            }
        },
        goToLindtPraline: function() {
            if(this.lindtPraline === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.lindtPraline = true;
            }
        },
        goToZitronella: function() {
            if(this.zitronella === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.zitronella = true;
            }
        },

        goToPlantBase: function() {
            if(this.plantbase === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.plantbase = true;
            }
        },
        goToGameShop: function() {
            if(this.gameShop === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.gameShop = true;
            }
        },
        goToSteuerkanzleiKaufmann: function() {
            if(this.steuerkanzleiKaufmann === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.steuerkanzleiKaufmann = true;
            }
        },

        goToHdrPhoto: function() {
            if(this.hdrPhoto === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.hdrPhoto = true;
            }
        },
        goToRepubilcPhoto: function() {
            if(this.republicPhoto === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.republicPhoto = true;
            }
        },
        goToCapoeiraPhoto: function() {
            if(this.capoeiraPhoto === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.capoeiraPhoto = true;
            }
        },
        goToLandschaftPhoto: function() {
            if(this.landschaftPhoto === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.landschaftPhoto = true;
            }
        },
        goToMakroPhoto: function() {
            if(this.makroPhoto === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.makroPhoto = true;
            }
        },
        goToCharacterPhoto: function() {
            if(this.characterPhoto === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.characterPhoto = true;
            }
        },
        goToHouseMachinePhoto: function() {
            if(this.houseMachinePhoto === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.houseMachinePhoto = true;
            }
        },

        goToRouka3D: function() {
            if(this.rouka3D === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.rouka3D = true;
            }
        },
        goToHexeninsel3D: function() {
            if(this.hexeninsel3D === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.hexeninsel3D = true;
            }
        },
        goToFraktale3D: function() {
            if(this.fraktale3D === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.fraktale3D = true;
            }
        },

        goToIrisIllu: function() {
            if(this.irisIllu === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.irisIllu = true;
            }
        },
        goToNightdrifterIllu: function() {
            if(this.nightdrifterIllu === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.nightdrifterIllu = true;
            }
        },
        goToCreatureDeseignIllu: function() {
            if(this.creatureDesignIllu === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.creatureDesignIllu = true;
            }
        },
        goToDrawingsIllu: function() {
            if(this.drawingsIllu === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.drawingsIllu = true;
            }
        },
        goToSketchesIllu: function() {
            if(this.sketchesIllu === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.sketchesIllu = true;
            }
        },

        goToAudioFree: function() {
            if(this.audioFree === false) {
                this.resetSites();
                this.audioFree = true;
            }
        },
        goToAnimationFree: function() {
            if(this.animationFree === false) {
                this.resetSites();
                this.animationFree = true;
            }
        },
        goToGamesFree: function() {
            if(this.gamesFree === false) {
                this.resetSites();
                this.gamesFree = true;
            }
        },
        goToCreativeWritingFree: function() {
            if(this.creativeWritingFree === false) {
                this.resetSites();
                this.creativeWritingFree = true;
            }
        },

        goToWritingBlindtext: function() {
            if(this.writingBlindtext === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.writingBlindtext = true;
            }
        },
        goToWriting40Grad: function() {
            if(this.writing40Grad === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.writing40Grad = true;
            }
        },
        goToWritingEscape: function() {
            if(this.writingEscape === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.writingEscape = true;
            }
        },
        goToWritingChaos: function() {
            if(this.writingChaos === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.writingChaos = true;
            }
        },
        goToWrintingFairy: function() {
            if(this.writingFairy === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.writingFairy = true;
            }
        },
        goToWritingWorte: function() {
            if(this.writingWords === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.writingWords = true;
            }
        },

        goToAudioMeerLeben: function() {
            if(this.audioMeerLeben === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.audioMeerLeben = true;
            }
        },
        goToAudioSubitorato: function() {
            if(this.audioSubitorato === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.audioSubitorato = true;
            }
        },
        goToAudioSnippents: function() {
            if(this.audioSnippets === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.audioSnippets = true;
            }
        },

        goToAnimationPetCat: function() {
            if(this.animationPetCat === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.animationPetCat = true;
            }
        },
        goToAnimationDragons: function() {
            if(this.animationDragons === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.animationDragons = true;
            }
        },
        goToAnimation3DTest: function() {
            if(this.animation3DTest === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.animation3DTest = true;
            }
        },
        goToAnimationSnippets: function() {
            if(this.animationSnippets === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.animationSnippets = true;
            }
        },

        goToGamesLostColors: function() {
            if(this.gamesLostColors === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.gamesLostColors = true;
            }
        },
        goToGamesEscapeRoom: function() {
            if(this.gamesEscapeRoom === false) {
                this.resetSites();
                this.projectSinglePage = true;
                this.gamesEscapeRoom = true;
            }
        },

        goToDownloadPage: function() {
            if(this.downloadPage === false) {
                this.resetSites();
                this.downloadPage = true;
            }
        },
        goToImprintPage: function() {
            if(this.imprintPage === false) {
                this.resetSites();
                this.imprintPage = true;
            }
        },


        resetSites: function() {
            this.aboutMePage = false;
            this.careerPage = false;
            this.newsPage = false;
            this.contactPage = false;

            this.projectPageAdvertising = false;
            this.projectPageCD = false;
            this.projectPagePrint = false;
            this.projectPagePackaging = false;
            this.projectPageWeb = false;
            this.projectPagePhotography = false;
            this.projectPage3D = false;
            this.projectPageIllustration = false;
            this.projectPageFreeProjects = false;

            this.projectSinglePage = false;

            this.heartbeat = false;
            this.sbgLandespreis = false;
            this.tube = false;
            this.untersbergbahn = false;
            this.hajimaru = false;

            this.invent = false;
            this.roco = false;
            this.wiberg = false;
            this.inspiranto = false;

            this.cruiseMissilesRoyality = false;
            this.lindtPraline = false;
            this.zitronella = false;

            this.rouka3D = false;
            this.hexeninsel3D = false;
            this.fraktale3D = false;

            this.irisIllu = false;
            this.nightdrifterIllu = false;
            this.creatureDesignIllu = false;
            this.drawingsIllu = false;
            this.sketchesIllu = false;

            this.tvSpots = false;
            this.deutscheStories = false;
            this.englischeStories = false;

            this.plakate = false;

            this.plantbase = false;
            this.gameShop = false;
            this.steuerkanzleiKaufmann = false;

            this.hdrPhoto = false;
            this.republicPhoto = false;
            this.capoeiraPhoto = false;
            this.landschaftPhoto = false;
            this.makroPhoto = false;
            this.characterPhoto = false;
            this.houseMachinePhoto = false;

            this.creativeWritingFree = false;
            this.writingBlindtext = false;
            this.writing40Grad = false;
            this.writingEscape = false;
            this.writingChaos = false;
            this.writingFairy = false;
            this.writingWords = false;

            this.audioFree = false;
            this.audioMeerLeben = false;
            this.audioSubitorato = false;
            this.audioSnippets = false;

            this.animationFree = false;
            this.animationDragons = false;
            this.animationPetCat = false;
            this.animation3DTest = false;
            this.animationSnippets = false;

            this.gamesFree = false;
            this.gamesLostColors = false;
            this.gamesEscapeRoom = false;

            this.downloadPage = false;
            this.imprintPage = false;

            this.phoneMenueTop = 'none';
            this.aboutMeInside = 'none';
            this.projectInside = 'none';
        },

        /*toggle text*/
        houseMachinePhotoTextToggle: function() {
            if(this.houseMachineText === false) {
                this.houseMachineText = true;
                document.getElementById("houseMachineSvg").setAttribute("transform", "rotate(90)");
            } else {
                this.houseMachineText = false;
                document.getElementById("houseMachineSvg").setAttribute("transform", "rotate(0)");
            }
        },
        hajimaruTextToggle: function() {
            if(this.hajimaruText === false) {
                this.hajimaruText = true;
                document.getElementById("hajimaruSvg").setAttribute("transform", "rotate(90)");
            } else {
                this.hajimaruText = false;
                document.getElementById("hajimaruSvg").setAttribute("transform", "rotate(0)");
            }
        },
        tubeTextToggle: function() {
            if(this.tubeText === false) {
                this.tubeText = true;
                document.getElementById("tubeSvg").setAttribute("transform", "rotate(90)");
            } else {
                this.tubeText = false;
                document.getElementById("tubeSvg").setAttribute("transform", "rotate(0)");
            }
        },
        cruiseMissilesRoyalityToggle: function() {
            if(this.cruiseMissilesRoyalityText === false) {
                this.cruiseMissilesRoyalityText = true;
                document.getElementById("cruiseMissilesRoyalitySvg").setAttribute("transform", "rotate(90)");
            } else {
                this.cruiseMissilesRoyalityText = false;
                document.getElementById("cruiseMissilesRoyalitySvg").setAttribute("transform", "rotate(0)");
            }
        },
        irisTextToggle: function() {
            if(this.irisText === false) {
                this.irisText = true;
                document.getElementById("irisSvg").setAttribute("transform", "rotate(90)");
            } else {
                this.irisText = false;
                document.getElementById("irisSvg").setAttribute("transform", "rotate(0)");
            }
        },
        plantBaseTextToggle: function() {
            if(this.plantBaseText === false) {
                this.plantBaseText = true;
                document.getElementById("plantBaseSvg").setAttribute("transform", "rotate(90)");
            } else {
                this.plantBaseText = false;
                document.getElementById("plantBaseSvg").setAttribute("transform", "rotate(0)");
            }
        },
        steuerkanzleiToggle: function() {
            if(this.steuerkanzleiText === false) {
                this.steuerkanzleiText = true;
                document.getElementById("steuerkanzleiSvg").setAttribute("transform", "rotate(90)");
            } else {
                this.steuerkanzleiText = false;
                document.getElementById("steuerkanzleiSvg").setAttribute("transform", "rotate(0)");
            }
        },
        lostColorsToggle: function() {
            if(this.lostColorsText === false) {
                this.lostColorsText = true;
                document.getElementById("lostColorsSvg").setAttribute("transform", "rotate(90)");
            } else {
                this.lostColorsText = false;
                document.getElementById("lostColorsSvg").setAttribute("transform", "rotate(0)");
            }
        },
        escapeRoomToggle: function() {
            if(this.escapeRoomText === false) {
                this.escapeRoomText = true;
                document.getElementById("escapeRoomSvg").setAttribute("transform", "rotate(90)");
            } else {
                this.escapeRoomText = false;
                document.getElementById("escapeRoomSvg").setAttribute("transform", "rotate(0)");
            }
        },




        /*career*/
        clickAll: function() {
            if(this.buttonActiveAll === false) {
                this.buttonActiveAll = true;
                this.buttonActiveEducation = false;
                this.buttonActiveWork = false;

                this.headerPicture = 'images/headerbilder/header_career_all.jpg';
                this.headerPictureQuad = 'images/headerbilder/header_career_allQuad.jpg';
                this.headerPictureTitle = 'Headerpicture - Werdegang Headerbild';
            }
        },
        clickEducation: function() {
            if (this.buttonActiveEducation === false) {
                this.buttonActiveEducation = true;
                this.buttonActiveAll = false;
                this.buttonActiveWork = false;

                this.headerPicture = 'images/headerbilder/header_career_education.jpg';
                this.headerPictureQuad = 'images/headerbilder/header_career_educationQuad.jpg';
                this.headerPictureTitle = 'Headerpicture - Ausbildung Headerbild';
            }
        },
        clickWork: function() {
            if (this.buttonActiveWork === false) {
                this.buttonActiveWork = true;
                this.buttonActiveEducation = false;
                this.buttonActiveAll = false;

                this.headerPicture = 'images/headerbilder/header_career_work.jpg';
                this.headerPictureQuad = 'images/headerbilder/header_career_workQuad.jpg';
                this.headerPictureTitle = 'Headerpicture - Arbeit Headerbild';
            }
        },
    },

    created: function() {

    },
});