import helpers from "./helpers";

var dataObj = {
    getCurrent() {
        //------------------------------
        let dataObj = this;
        let lang = helpers.tryGetUrlParameter("lang");
        if (!lang) {
            lang = "EN";
        }
        else {
            lang = lang.toUpperCase();
        }

        let currentTranslateData = dataObj.getTranslate(lang);
        let defaultTranslateData = dataObj.getDefaultTranslate();

        //------------------------------
        for (var key of Object.keys(defaultTranslateData)) {
            if (!currentTranslateData[key])
                currentTranslateData[key] = defaultTranslateData[key]
        }

        return currentTranslateData;
    },
    getDefaultTranslate() {
        return this.getTranslate("EN");
    },
    getTranslate(lang) {
        let dataObj = this;

        //------------------------------
        var currentTranslateData = dataObj["translate_" + lang];
        currentTranslateData.currentTranslate = dataObj
            .translates
            .filter(r => r.shortName == lang)[0];

        //------------------------------
        let availableLangs = helpers.tryGetUrlParameter("al");
        let availableLangsArr = (availableLangs ? availableLangs : "").split(",");
        currentTranslateData.otherTranslates = dataObj
            .translates
            .filter(r => r.shortName != lang && availableLangsArr.includes(r.shortName));

        //Crunch <<<
        currentTranslateData.externalUrl = "https://extremedotneting.github.io/?lang=" + lang + "&al=" +availableLangs;
        //console.log(currentTranslateData.externalUrl)
        //>>>
        return currentTranslateData;
    },

    translates: [
        { shortName: "EN", title: "English", flagName: "gb" },
        { shortName: "RU", title: "Russian", flagName: "ru" },
        { shortName: "UA", title: "Ukrainian", flagName: "ua" }
    ],

    translate_EN: {
        myName: "YURII MYSKO",
        workPosition: "C# Developer",

        aboutMeTitle: "ABOUT ME",
        aboutMeText: "A programmer with experience in development of mobile and desktop applications, websites, servers.<br>I'm not afraid of technically difficult tasks.<br>In each project, the most important thing for me is to solve a business problem.<br>Have experience in team management.",

        skillsTitle: "SKILLS",
        skills: [
            ["C#", "ASP.NET", "WPF", "XAML", "WinForms", "Xamarin"],
            ["MS SQL", "PostgreSQL", "SQLite", "MongoDB", "LiteDB"],
            ["SOLID", "GoF patterns", "MVC", "MVVM"],
            ["Vue.js", "Typescript", "Unity", "nUnit", "PuppeteerSharp", "Chromium"]
        ],

        educationTitle: "EDUCATION",
        educationText: "<i>Admiral Makarov National University of Shipbuilding</i><br><b>Specialty:</b> Software engineering.<br><b>Degree:</b> master.",


        languagesTitle: "LANGUAGES",
        languagesList: [
            {
                lang: "Russian",
                text: "Native language."
            },
            {
                lang: "Ukrainian",
                text: "Native language."
            },
            {
                lang: "English",
                text: "Level B1."
            }
        ],

        contactsTitle: "CONTACTS",
        contactsList: [
            { icon: "mdi-email", text: "y.mysko.work@gmail.com", url: "mailto:y.mysko.work@gmail.com" },
            { image: "telegram.png", text: "@extreme_dotneting", url: "https://t.me/extreme_dotneting" },
            { image: "github.png", text: "Open-source projects", url: "https://github.com/ExtremeDotneting?tab=repositories" },
            { image: "youtube.png", text: "Projects videos", url: "https://www.youtube.com/@user-wn3ph5nh6u/videos" }
        ],

        workExpTitle: "WORK EXPERIENCE",
        workExpTimelineList: [
            {
                companyName: "FOZZY Group",
                position: "TeamLead C# Developer",
                companyLogos: [
                    { fileName: "fozzy.png", width: 40, height: 40 },
                    { fileName: "silpo.png", width: 80, height: 40 }
                ],
                dateOfWork: "March 2021 – May 2023",
                text: " • Mentorship. Development team management;<br> • Large systems integration: <a href=\"https://silpo.ua/\">Silpo</a>, <a href=\"https://maudau.com.ua/\">MauDau</a>, <a href=\"https://justin.ua/\">Justin</a>,  <a href=\"https://novaposhta.ua/\">NovaPoshta</a> etc;<br> • <a href=\"https://www.nuget.org/profiles/KogerCoder\">Open-source development</a>;<br> • Architecture development, microservice architecture;<br> • Servers dev. Integration with clouds Azure, Amazon."
            },
            {
                companyName: "R&D Team",
                position: "Senior C# Developer",
                companyLogos: [
                    { fileName: "RnD_Team.png", width: 120, height: 40 }
                ],
                dateOfWork: "August 2019 – October 2020",
                text: " • Trading bot for <a href=\"https://www.binance.com/\">Binance</a>;<br> • Trading bot for cryptocurrency derivatives exchange <a href=\"https://www.deribit.com/\">Deribit</a>;<br> • ASP.NET services;<br> • Working with WebView & Chromium, automating actions on websites;<br> • Cryptocurrency exchange dev."
            },
            {
                companyName: "Freelance",
                position: "C# Developer",
                companyLogos: [],
                dateOfWork: "February 2017 - August 2019",
                text: " • Development of mobile / desktop applications;<br> • Application backend development;<br> • Open-source MVC framework for Telegram bots - <a href=\"https://www.nuget.org/packages/Telegram.Bot.AspNetPipeline\">Telegram.Bot.AspNetPipeline</a>;<br> • Social networks API integration;<br> • Services integration (Firebase, Facebook, AppCenter, Yandex Metrics);<br> • CI;<br> • Web-parsing. Working with browser engines, automating actions in the browser;<br> • Unity. RPG development. Game backend development. Odin usage."
            },
            {
                companyName: "QWICC LLC",
                position: "C# Developer",
                companyLogos: [
                    { fileName: "qwicc.png", width: 70, height: 40 }
                ],
                dateOfWork: "June 2016 - February 2017",
                text: " • Development of a cryptocurrency exchange;<br> • Integration with cryptocurrency nodes Bitcoin, Ethereum, Tron, Tezos etc."
            }
        ]
    },

    translate_RU: {
        myName: "ЮРИЙ МИСЬКО",
        workPosition: "C# Разработчик",

        aboutMeTitle: "ОБО МНЕ",
        aboutMeText: "Программист с опытом разработки мобильных и десктопных приложений, сайтов, серверов.<br>Не боюсь технически сложных задач.<br>В каждом проекте для меня важнее всего решить бизнес-проблему.<br>Есть опыт управления командой.",

        skillsTitle: "НАВЫКИ",
        skills: [
            ["C#", "ASP.NET", "WPF", "XAML", "WinForms", "Xamarin"],
            ["MS SQL", "PostgreSQL", "SQLite", "MongoDB", "LiteDB"],
            ["SOLID", "GoF patterns", "MVC", "MVVM"],
            ["Vue.js", "Typescript", "Unity", "nUnit", "PuppeteerSharp", "Chromium"]
        ],

        educationTitle: "ОБРАЗОВАНИЕ",
        educationText: "<i>НУК имени адмирала Макарова</i><br><b>Cпециальность:</b> Инженерия програмного обеспечения.<br><b>Степень:</b> магистр.",

        languagesTitle: "ЗНАНИЕ ЯЗЫКОВ",
        languagesList: [
            {
                lang: "Русский",
                text: "Свободно владею."
            },
            {
                lang: "Украинский",
                text: "Свободно владею."
            },
            {
                lang: "Английский",
                text: "Уровень B1."
            }
        ],

        contactsTitle: "КОНТАКТЫ",

        workExpTitle: "ОПЫТ РАБОТЫ",
        workExpTimelineList: [
            {
                companyName: "FOZZY Group",
                position: "TeamLead C# Developer",
                companyLogos: [
                    { fileName: "fozzy.png", width: 40, height: 40 },
                    { fileName: "silpo.png", width: 80, height: 40 }
                ],
                dateOfWork: "Март 2021 – Май 2023",
                text: " • Менторство. Управление командой разработчиков;<br> • Интеграция крупных систем: <a href=\"https://silpo.ua/\">Silpo</a>, <a href=\"https://maudau.com.ua/\">MauDau</a>, <a href=\"https://justin.ua/\">Justin</a>,  <a href=\"https://novaposhta.ua/\">NovaPoshta</a> и другие;<br> • <a href=\"https://www.nuget.org/profiles/KogerCoder\">Open-source разработка</a>;<br> • Разработка архитектуры приложений, микросервисная архитектура;<br> • Разработка серверов. Работа с облачными сервисами Azure, Amazon."
            },
            {
                companyName: "R&D Team",
                position: "Senior C# Developer",
                companyLogos: [
                    { fileName: "RnD_Team.png", width: 120, height: 40 }
                ],
                dateOfWork: "Август 2019 – Октябрь 2020",
                text: " • Трейдинг-бот для <a href=\"https://www.binance.com/\">Binance</a>;<br> • Трейдинг-бот для биржи криптовалютных деривативов <a href=\"https://www.deribit.com/\">Deribit</a>;<br> • ASP.NET сервисы;<br> • Работа с WebView и Chromium для автоматизации действий на веб-сайтах;<br> • Разработка обменника криптовалют."
            },
            {
                companyName: "Фриланс",
                position: "C# Developer",
                companyLogos: [],
                dateOfWork: "Февраль 2017 - Август 2019",
                text: " • Разработка мобильных / десктопных приложений;<br> • Разработка бекенда для приложений. Работа с БД;<br> • Open-source MVC фреймворк для телеграмм ботов <a href=\"https://www.nuget.org/packages/Telegram.Bot.AspNetPipeline\">Telegram.Bot.AspNetPipeline</a>;<br> • Интеграция с API соц. сетей;<br> • Интеграция приложений с сервисами (Firebase, Facebook, AppCenter, Яндекс Метрика);<br> • CI развертывание;<br> • Веб-парсинг. Работа с браузерными движками, автоматизация действий в браузере;<br> • Unity. Разработка игры в жанре rpg. Разработка бекенда игры;<br> • Разработка редакторов на основе Odin."
            },
            {
                companyName: "QWICC LLC",
                position: "C# Developer",
                companyLogos: [
                    { fileName: "qwicc.png", width: 70, height: 40 }
                ],
                dateOfWork: "Июнь 2016 - Февраль 2017",
                text: " • Разработка обменника криптовалют;<br> • Интеграция с нодами криптовалют Bitcoin, Ethereum, Tron, Tezos и др."
            }
        ]
    },

    translate_UA: {
        myName: "ЮРІЙ МИСЬКО",
        workPosition: "C# Розробник",

        aboutMeTitle: "ПРО МЕНЕ",
        aboutMeText: "Програміст з досвідом розробки мобільних і десктопних додатків, сайтів, серверів.<br>Не боюся технічно складних завдань.<br>У кожному проекті для мене найважливіше вирішити бізнес-проблему.<br>Є досвід управління командою.",

        skillsTitle: "НАВИЧКИ",
        skills: [
            ["C#", "ASP.NET", "WPF", "XAML", "WinForms", "Xamarin"],
            ["MS SQL", "PostgreSQL", "SQLite", "MongoDB", "LiteDB"],
            ["SOLID", "GoF patterns", "MVC", "MVVM"],
            ["Vue.js", "Typescript", "Unity", "nUnit", "PuppeteerSharp", "Chromium"]
        ],

        educationTitle: "ОСВІТА",
        educationText: "<i>НУК імені адмірала Макарова</i><br><b>Спеціальність:</b> Інженерія програмного забезпечення.<br><b>Ступінь:</b> магістр.",

        languagesTitle: "ЗНАННЯ МОВ",
        languagesList: [
            {
                lang: "Українська",
                text: "Вільно володію."
            },
            {
                lang: "Російська",
                text: "Вільно володію."
            },
            {
                lang: "Англійська",
                text: "Рівень B1."
            }
        ],

        contactsTitle: "КОНТАКТИ",

        workExpTitle: "ДОСВІД РОБОТИ",
        workExpTimelineList: [
            {
                companyName: "FOZZY Group",
                position: "TeamLead C# Developer",
                companyLogos: [
                    { fileName: "fozzy.png", width: 40, height: 40 }
                    //{ fileName: "silpo.png", width: 80, height: 40 }
                ],
                dateOfWork: "Березень 2021 – Травень 2023",
                text: " • Менторство. Управління командою розробників;<br> • Інтеграція великих систем: <a href=\"https://silpo.ua/\">Silpo</a>, <a href=\"https://maudau.com.ua/\">MauDau</a>, <a href=\"https://justin.ua/\">Justin</a>,  <a href=\"https://novaposhta.ua/\">NovaPoshta</a> та інші;<br> • <a href=\"https://www.nuget.org/profiles/KogerCoder\">Open-source розробка</a>;<br> • Розробка архітектури програм, мікросервісна архітектура;<br> • Розробка серверів. Робота з хмарними сервісами Azure, Amazon."
            },
            {
                companyName: "R&D Team",
                position: "Senior C# Developer",
                companyLogos: [
                    { fileName: "RnD_Team.png", width: 120, height: 40 }
                ],
                dateOfWork: "Серпень 2019 – Жовтень 2020",
                text: " • Трейдінг-бот для <a href=\"https://www.binance.com/\">Binance</a>;<br> • Трейдінг-бот для біржи криптовалютних деривативів <a href=\"https://www.deribit.com/\">Deribit</a>;<br> • ASP.NET сервіси;<br> • Робота с WebView та Chromium для автоматизації дій на веб-сайтах;<br> • Розробка обмінника криптовалют."
            },
            {
                companyName: "Фріланс",
                position: "C# Developer",
                companyLogos: [],
                dateOfWork: "Лютий 2017 - Серпень 2019",
                text: " • Розробка мобільних / десктопних додатків;<br> • Розробка бекенда для програм. Робота з БД;<br> • Open-source MVC фреймворк для телеграм ботів <a href=\"https://www.nuget.org/packages/Telegram.Bot.AspNetPipeline\">Telegram.Bot.AspNetPipeline</a>;<br> • Інтеграція з API соц. мереж;<br> • Інтеграція додатків з сервісами (Firebase, Facebook, AppCenter, Яндекс Метрика);<br> • CI розгортування;<br> • Веб-парсинг. Робота з браузерними бібліотеками, автоматизація дій у браузері;<br> • Unity. Розробка ігор в жанрі rpg. Розробка бекенда ігри;<br> • Розробка редакторів на основі Odin."
            },
            {
                companyName: "QWICC LLC",
                position: "C# Developer",
                companyLogos: [
                    { fileName: "qwicc.png", width: 70, height: 40 }
                ],
                dateOfWork: "Червень 2016 - Лютий 2017",
                text: " • Розробка обмінника криптовалют;<br> • Інтеграція з нодами криптовалют Bitcoin, Ethereum, Tron, Tezos та іншими."
            }
        ]
    },
}

export default dataObj.getCurrent();