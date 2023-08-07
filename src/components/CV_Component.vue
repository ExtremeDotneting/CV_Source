<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="12" md="12">
                <MyCard :title="myName">
                    <v-card-text>
                        1<br>2
                    </v-card-text>
                </MyCard>

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
                                        <img v-for="fileName in workItem.companyLogos" :src="`./images/companiesLogos/${fileName}`" height="40"
                                            style="max-width:70px" class="mb-n3 ml-1">
                                    </h2>
                                    <h3 :class="`mt-n1 headline font-weight-light `">
                                        {{ workItem.position }}
                                    </h3>
                                    <div
                                        :class="`pt-1 headline font-weight-light font-italic text-${workTimelineTitleColor} mb-4`">
                                        {{ workItem.dateOfWork }}
                                    </div>
                                    <div v-html="workItem.text">

                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>

                        <br>
                        <p>---------------</p>
                        <br>

                        <div class="font-weight-bold ms-1 mb-2">
                            Today
                        </div>

                        <v-timeline density="compact" align="start">
                            <v-timeline-item v-for="message in timelineTest1" :key="message.time" :dot-color="message.color"
                                size="x-small">
                                <div class="mb-4">
                                    <div class="font-weight-normal">
                                        <strong>{{ message.from }}</strong> @{{ message.time }}
                                    </div>
                                    <div>{{ message.message }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>

                        <br>
                        <p>---------------</p>
                        <br>

                        <v-timeline>

                            <v-timeline-item v-for="(item, i) in timelineTest2" :key="i" :dot-color="item.color"
                                :icon="item.icon" fill-dot>
                                <v-card>
                                    <v-card-title :class="['text-h6', `bg-${item.color}`]">
                                        Lorem Ipsum Dolor
                                    </v-card-title>
                                    <v-card-text class="bg-white text--primary">
                                        <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                            nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim
                                            zril disputando voluptatibus, vix an salutandi sententiae.</p>
                                        <v-btn :color="item.color" variant="outlined">
                                            Button
                                        </v-btn>
                                    </v-card-text>
                                </v-card>
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
                <MyCard :title="skillsTitle" :icon="skillsIcon">
                    <v-card-text>

                        <v-chip-group>
                            <v-chip variant="outlined" v-for="skill in skills">
                                {{ skill }}
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                </MyCard>

                <MyCard :title="languagesTitle" :icon="languagesIcon">
                    <v-card-text>
                        1<br>2
                    </v-card-text>
                </MyCard>

                <MyCard :title="contactsTitle" :icon="contactsIcon">
                    <p v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">++++ {{ num }} ++++</p>
                </MyCard>

            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import MyCard from './MyCard.vue'

//Help functions
function escapeStringToHtml(str) {
    return str.replaceAll("\n", "<br>");
}

//Export current model
export default {
    components: {
        MyCard
    },
    data() {
        return {
            myName: "YURII MYSKO",

            aboutMeTitle: "ABOUT ME",
            aboutMeIcon: "mdi-account",
            aboutMeText: "Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi! <br>Hi! Hi! Hi! Hi!",

            skillsTitle: "SKILLS",
            skillsIcon: "mdi-pencil-ruler",
            skills: ["C#", ".NET"],

            educationTitle: "EDUCATION",
            educationIcon: "mdi-school",


            languagesTitle: "LANGUAGE",
            languagesIcon: "mdi-translate",

            contactsIcon: "mdi-contacts",
            contactsTitle: "CONTACTS",



            workExpTitle: "WORK EXPERIENCE",
            workExpIcon: "mdi-briefcase",
            workExpTimelineList: [
                {
                    companyName: "FOZZY Group (Silpo)",
                    position: "TeamLead C# Developer",
                    companyLogos: [
                        "fozzy.png",
                        "silpo.png"
                    ],
                    dateOfWork: "Март 2021 – Май 2023",
                    text: " • Менторство. Управление командой разработчиков;<br> • Интеграция крупных систем: <a href=\"https://silpo.ua/\">Silpo</a>, <a href=\"https://maudau.com.ua/\">MauDau</a>, <a href=\"https://justin.ua/\">Justin</a>,  <a href=\"https://novaposhta.ua/\">NovaPoshta</a> и другие;<br> • <a href=\"https://www.nuget.org/profiles/KogerCoder\">Open-source разработка</a> востребованных библиотек;<br> • Разработка архитектуры приложений, микросервисная архитектура;<br> • Разработка серверов. Работа с облачными сервисами Azure, Amazon."
                },
                {
                    companyName: "R&D Team",
                    position: "Senior C# Developer",
                    companyLogos: [
                        "RnD_Team.png"
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
                        "qwicc.png"
                    ],
                    dateOfWork: "Июнь 2016 - Февраль 2017",
                    text: " • Разработка обменника криптовалют;<br> • Интеграция с нодами криптовалют Bitcoin, Ethereum, Tron, Tezos и др."
                }
            ],


            timelineTest1: [
                {
                    from: 'You',
                    message: `Sure, I'll see you later.`,
                    time: '10:42am',
                    color: 'deep-purple-lighten-1',
                },
                {
                    from: 'John Doe',
                    message: 'Yeah, sure. Does 1:00pm work?',
                    time: '10:37am',
                    color: 'green',
                },
                {
                    from: 'You',
                    message: 'Did you still want to grab lunch today?',
                    time: '9:47am',
                    color: 'deep-purple-lighten-1',
                },
            ],
            timelineTest2: [
                {
                    color: 'red-lighten-2',
                    icon: 'mdi-star',
                },
                {
                    color: 'purple-lighten-2',
                    icon: 'mdi-book-variant',
                },
                {
                    color: 'green-lighten-1',
                    icon: 'mdi-airballoon',
                },
                {
                    color: 'indigo-lighten-2',
                    icon: 'mdi-layers-triple',
                },
            ],
            timelineTest3: [
                {
                    color: 'cyan',
                    year: '1960',
                },
                {
                    color: 'green',
                    year: '1970',
                },
                {
                    color: 'pink',
                    year: '1980',
                },
                {
                    color: 'amber',
                    year: '1990',
                },
                {
                    color: 'orange',
                    year: '2000',
                },
            ],
        }
    },

    mounted() {

    }
}
</script>