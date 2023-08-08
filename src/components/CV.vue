<template>
    <div id="mainDivElement">

        <v-row no-gutters class="mr-1 ml-n1">
            <v-col sm="12" md="12">
                <v-card class="elevation-11 ml-2 mt-2">
                    <v-img height="130" src="/images/titleBackground.png" cover style="z-index: -10;">
                        <v-card-title class="text-h5 text-white " style="z-index:1000;">
                            <div class="float-right mt-1 mr-1">
                                <img src="/images/icons/downloadPDF.png" width="70" id="downloadPdfIcon">
                            </div>
                            <div class="text-h4" style="margin-left: 130px;margin-top: 30px;">{{ myName }}</div>
                            <div class="text-h6 font-italic" style="margin-left: 130px;">{{ workPosition }}</div>
                        </v-card-title>
                    </v-img>


                    <img src="/images/portraits/portrait.jpg" width="100" height="130" class="ml-8 rounded-sm elevation-9"
                        style="border: 1px solid; border-color: black; margin-top: -100px;">


                    <div><br></div>
                    <div class="text-center">
                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" v-bind="props">
                                    <img :src="`https://flagcdn.com/16x12/${currentTranslate.shortName}.png`" width="16"
                                        height="12">
                                    {{ }}
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="(item, index) in translates" :key="index">
                                    <v-list-item-title>
                                        <img :src="`https://flagcdn.com/16x12/${item.shortName}.png`" width="16"
                                            height="12">
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-card>
            </v-col>

            <v-col sm="12" md="8">
                <MyCard :title="aboutMeTitle" :icon="aboutMeIcon">
                    <v-card-text v-html="aboutMeText">
                    </v-card-text>
                </MyCard>

                <MyCard :title="workExpTitle" :icon="workExpIcon">
                    <v-card-text>

                        <v-timeline align="start" density="compact">
                            <v-timeline-item v-for="(workItem, i) in workExpTimelineList" :key="i"
                                dot-color="workTimelineDotsColor" size="small">

                                <div>
                                    <h2 :class="`mt-n1 headline  text-workTimelineTitleColor mb-3`">
                                        {{ workItem.companyName }}
                                        <img v-for="companyLogo in workItem.companyLogos"
                                            :src="`./images/companiesLogos/${companyLogo.fileName}`"
                                            :height="companyLogo.height" :width="companyLogo.width" class="mb-n3 ml-1">
                                    </h2>
                                    <h3 :class="`mt-n1 headline font-weight-light `">
                                        {{ workItem.position }}
                                    </h3>
                                    <div
                                        :class="`pt-1 headline font-weight-light font-italic text-${workTimelineTitleColor} mb-3`">
                                        {{ workItem.dateOfWork }}
                                    </div>
                                    <div v-html="workItem.text">

                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </MyCard>

                <MyCard :title="educationTitle" :icon="educationIcon">
                    <v-card-text>
                        1<br>2
                    </v-card-text>
                </MyCard>
            </v-col>

            <v-col sm="12" md="4">
                <v-card class="elevation-11 ml-2 mt-2">
                    <MyCardTitle :title="skillsTitle" :icon="skillsIcon" class="mt-2"></MyCardTitle>
                    <v-card-text>
                        <div v-for="skillGroup in skills" class="">
                            <v-chip variant="outlined" v-for="skill in skillGroup" color="skillChipColor"
                                style="margin: 2px; zoom: 0.8;">
                                {{ skill }}
                            </v-chip>
                        </div>
                    </v-card-text>


                    <MyCardTitle :title="languagesTitle" :icon="languagesIcon" class="mt-2"> </MyCardTitle>
                    <v-card-text>
                        <v-list-item v-for="item in languagesList" class="ml-n1">
                            <template v-slot:prepend>
                                <div class="mr-3">
                                    <span class="text-h6 text-langNameColor"> {{ item.lang }} </span>
                                </div>
                            </template>
                            <v-progress-linear :model-value="item.percent * 100" color="languageKnowledgeLevel" height="10"
                                rounded></v-progress-linear>
                            <template v-slot:append>
                                <div class="ml-2">
                                    <span class="d-flex justify-end"> {{ item.level }} </span>
                                </div>
                            </template>
                        </v-list-item>
                    </v-card-text>


                    <MyCardTitle :title="contactsTitle" :icon="contactsIcon" class="mt-2"> </MyCardTitle>
                    <v-card-text>
                        ++++
                    </v-card-text>
                </v-card>



            </v-col>
        </v-row>
    </div>
</template>

<script>
import MyCard from './MyCard.vue'
import MyCardTitle from './MyCardTitle.vue'

//Help functions
function escapeStringToHtml(str) {
    return str.replaceAll("\n", "<br>");
}

//Export current model
export default {
    components: {
        MyCard, MyCardTitle
    },
    data() {
        return {
            currentTranslate: { title: "English", shortName: "gb" },
            translates: [
                { title: "Russian", shortName: "ru" },
                { title: "Ukrainian", shortName: "ua" }
            ],

            myName: "YURII MYSKO",
            workPosition: "C# Developer",

            aboutMeTitle: "ABOUT ME",
            aboutMeIcon: "mdi-account",
            aboutMeText: "Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi!",

            skillsTitle: "SKILLS",
            skillsIcon: "mdi-pencil-ruler",
            skills: [
                ["C#", "ASP.NET", "WPF", "XAML", "WinForms", "Xamarin"],
                ["Vue.js", "Typescript"],
                ["MS SQL", "PostgreSQL", "SQLite"],
                ["MongoDB", "LiteDB"],
                ["SOLID", "GoF patterns", "MVC", "MVVM"],
                ["nUnit", "PuppeteerSharp", "Chromium"],
                ["Unity"]
            ],

            educationTitle: "EDUCATION",
            educationIcon: "mdi-school",


            languagesTitle: "LANGUAGES",
            languagesIcon: "mdi-translate",
            languagesList: [
                {
                    lang: "RU",
                    percent: 1,
                    level: "Native"
                },
                {
                    lang: "UA",
                    percent: 1,
                    level: "Native"
                },
                {
                    lang: "EN",
                    percent: 0.7,
                    level: "B1"
                }
            ],

            contactsIcon: "mdi-contacts",
            contactsTitle: "CONTACTS",



            workExpTitle: "WORK EXPERIENCE",
            workExpIcon: "mdi-briefcase",
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
                        { fileName: "RnD_Team.png", width: 90, height: 40 }
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
            ],
        }
    },

    mounted() {

    }
}
</script>

<style>
#mainDivElement {
    margin: auto;
    max-width: 1200px;
}

#downloadPdfIcon:hover {
    filter: invert(1)
}
</style>