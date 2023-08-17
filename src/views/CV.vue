<template>
    <div id="mainDivElement">
        <v-row no-gutters class="mr-1 ml-n1" id="toPrintPdf">
            <v-col sm="12" md="12">
                <v-card class="elevation-11 ml-2 mt-0">
                    <CV_Top :hideTopButtons="false"></CV_Top>
                </v-card>
            </v-col>

            <v-col sm="12" md="8" style="page-break-after: avoid;">
                <v-card class="elevation-11 ml-2 mt-2">
                    <CV_WorkExp></CV_WorkExp>
                </v-card>

                <v-card class="elevation-11 ml-2 mt-2">
                    <CV_Edu></CV_Edu>
                </v-card>
            </v-col>

            <v-col sm="12" md="4" style="page-break-after: avoid;">
                <v-card class="elevation-11 ml-2 mt-2">
                    <CV_Skill></CV_Skill>
                    <CV_Lang></CV_Lang>
                    <CV_Contacts></CV_Contacts>
                </v-card>

                <v-card class="elevation-11 ml-2 mt-2">
                    <CV_AboutMe></CV_AboutMe>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import MyCardTitle from '../components/MyCardTitle.vue';
import helpers from '../core/helpers'
import CV_Top from "../components/CV_Top.vue"
import CV_WorkExp from '../components/CV_WorkExp.vue';
import CV_Edu from '../components/CV_Edu.vue';
import CV_AboutMe from '../components/CV_AboutMe.vue';
import CV_Skill from '../components/CV_Skill.vue';
import CV_Lang from '../components/CV_Lang.vue';
import CV_Contacts from '../components/CV_Contacts.vue';
import DataCV from '@/core/DataCV';

//Export current model
export default {
    components: {
        MyCardTitle,
        CV_Top,
        CV_WorkExp,
        CV_Edu,
        CV_AboutMe,
        CV_Skill,
        CV_Lang,
        CV_Contacts
    },
    data() {
        return DataCV;
    },
    mounted() {
        var el = document.querySelector(".v-timeline-divider__before");
        if (el)
            el.style.display = "none";
    }
}
</script>

<style scoped>
html {
    background-color: #f2f2f2;
}

#mainDivElement {
    margin: auto;
    max-width: 1200px;
}

/* #downloadPdfIcon:hover {
    filter: invert(1)
} */
</style>