var dataObj = {
    getDefaultTranslate() {
        return this.getTranslate("EN");
    },
    getTranslate(lang) {
        let dataObj = this;
        var currentTranslateData = dataObj["translate_" + lang];
        currentTranslateData.currentTranslate = dataObj
            .translates
            .filter(r => r.shortName == lang)[0];
        currentTranslateData.otherTranslates = dataObj
            .translates
            .filter(r => r.shortName != lang);
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
        aboutMeText: "Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi!",

        skillsTitle: "SKILLS",
        skills: [
            ["C#", "ASP.NET", "WPF", "XAML", "WinForms", "Xamarin"],
            ["MS SQL", "PostgreSQL", "SQLite", "MongoDB", "LiteDB"],
            ["SOLID", "GoF patterns", "MVC", "MVVM"],
            ["Vue.js", "Typescript", "Unity", "nUnit", "PuppeteerSharp", "Chromium"]
        ],

        educationTitle: "EDUCATION",
        educationText: "<i>НУК имени адмирала Макарова</i><br><b>Cпециальность:</b> Инжененрия програмного обеспечения.<br><b>Степень:</b> магистр.",


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
            { icon: "mdi-phone-in-talk", text: "+375257067452", url: "tel:+375257067452" },
            { icon: "mdi-email", text: "y.mysko.work@gmail.com", url: "mailto:y.mysko.work@gmail.com" },
            { image: "/images/icons/telegram.png", text: "@extreme_dotneting", url: "https://t.me/extreme_dotneting" }
        ],

        workExpTitle: "WORK EXPERIENCE",
        workExpTimelineList: [
            {
                companyName: "FOZZY Group (Silpo)",
                position: "TeamLead C# Developer",
                companyLogos: [
                    { fileName: "fozzy.png", width: 40, height: 40 },
                    { fileName: "silpo.png", width: 80, height: 40 }
                ],
                dateOfWork: "Март 2021 – Май 2023",
                text: " • Менторство. Управление командой разработчиков;<br> • Интеграция крупных систем: <a href=\"https://silpo.ua/\">Silpo</a>, <a href=\"https://maudau.com.ua/\">MauDau</a>, <a href=\"https://justin.ua/\">Justin</a>,  <a href=\"https://novaposhta.ua/\">NovaPoshta</a> и другие;<br> • <a href=\"https://www.nuget.org/profiles/KogerCoder\">Open-source разработка</a> востребованных библиотек;<br> • Разработка архитектуры приложений, микросервисная архитектура;<br> • Разработка серверов. Работа с облачными сервисами Azure, Amazon."
            },
            {
                companyName: "R&D Team",
                position: "Senior C# Developer",
                companyLogos: [
                    { fileName: "RnD_Team.png", width: 120, height: 40 }
                ],
                dateOfWork: "Август 2019 – Октябрь 2021",
                text: " • Трейдинг-бот для <a href=\"https://www.binance.com/\">Binance</a>;<br> • Трейдинг-бот для биржи опционов <a href=\"https://www.deribit.com/\">Deribit</a>;<br> • ASP.NET сервисы;<br> • Работа с WebView и Chromium для автоматизации действий на веб-сайтах;<br> • Разработка обменника криптовалют."
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

    translate_RU: {
        aboutMeTitle: "Обо мне",
    },
    translate_UA: {}
}

export default dataObj;