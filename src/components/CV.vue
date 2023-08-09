<template>
    <div id="mainDivElement">

        <v-row no-gutters class="mr-1 ml-n1" id="toPrintPdf">
            <v-col sm="12" md="12">
                <CV_Top :overrideData="this"></CV_Top>
            </v-col>

            <v-col sm="12" md="8" style="page-break-after: avoid;">
                <MyCard :title="workExpTitle" :icon="workExpIcon">
                    <v-card-text>
                        <v-timeline align="start" density="compact" class="mt-n3">
                            <v-timeline-item v-for="(workItem, i) in workExpTimelineList" :key="i"
                                dot-color="workTimelineDotsColor" size="small">
                                <div class="mb-n1">
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
                    <v-card-text v-html="educationText">
                    </v-card-text>
                </MyCard>
            </v-col>

            <v-col sm="12" md="4" style="page-break-after: avoid;">
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


                    <MyCardTitle :title="contactsTitle" :icon="contactsIcon" class="mt-2 mb-n1"> </MyCardTitle>
                    <v-card-text>
                        <v-list density="compact">
                            <v-list-item v-for="(cont, i) in contactsList" :key="i" class="ml-n1 mb-n1">
                                <template v-slot:prepend>
                                    <v-icon v-if="cont.icon" :icon="cont.icon" class="mr-2"></v-icon>
                                    <img v-if="cont.image" :src="cont.image" class="mr-2" width="20">
                                </template>
                                <v-list-item-title>
                                    <a :href="cont.url">{{ cont.text }}</a>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>


                <MyCard :title="aboutMeTitle" :icon="aboutMeIcon">
                    <v-card-text v-html="aboutMeText">
                    </v-card-text>
                </MyCard>
            </v-col>




        </v-row>
    </div>
</template>

<script>
import MyCard from './MyCard.vue'
import MyCardTitle from './MyCardTitle.vue'
import dataObj from '@/DataCV';
import helpers from '../core/helpers';
import { jsPDF } from "jspdf";
import CV_Top from "./CV_Top.vue"

//Export current model
export default {
    components: {
        MyCard, MyCardTitle, CV_Top
    },
    data() {
        let lang = helpers.tryGetUrlParameter("lang");
        if (!lang) {
            lang = "EN";
        }
        else {
            lang = lang.toUpperCase();
        }

        let currentTranslateData = dataObj.getTranslate(lang);
        let defaultTranslateData = dataObj.getDefaultTranslate();

        for (var key of Object.keys(defaultTranslateData)) {
            if (!currentTranslateData[key])
                currentTranslateData[key] = defaultTranslateData[key]
        }

        console.log(currentTranslateData)
        return currentTranslateData;
    },

    mounted() {
        var lines = document.querySelectorAll("div.v-timeline-divider > div.v-timeline-divider__before");
        lines[0].style.display = "none";
    },

    methods: {
        changeTranslation(lang) {
            helpers.redirectWithUrlParams("/", { "lang": lang });
        },
        downloadPDF() {

            let elementId = "#toPrintPdf";
            let fileName = "cv.pdf";

            var doc = new jsPDF();

            // Source HTMLElement or a string containing HTML.
            var elementHTML = document.querySelector(elementId);

            doc.html(elementHTML, {
                callback: function (doc) {
                    // Save the PDF
                    doc.save(fileName);
                },
                x: 15,
                y: 15,
                width: 170, //target width in the PDF document
                windowWidth: 650 //window width in CSS pixels
            });
        }
    }
}
</script>

<style>
#mainDivElement {
    margin: auto;
    max-width: 1200px;
}

/* #downloadPdfIcon:hover {
    filter: invert(1)
} */
</style>