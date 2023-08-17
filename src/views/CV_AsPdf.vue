<template>
    <div id="mainDivElement">
        <v-row no-gutters id="toPrintPdf">
            <v-col>

                <CV_Top :isPdfVersion="true"></CV_Top>

                <CV_AboutMe></CV_AboutMe>

                <CV_Skill></CV_Skill>

                <CV_WorkExp></CV_WorkExp>

                <CV_Lang></CV_Lang>

                <CV_Contacts></CV_Contacts>

                <CV_Edu></CV_Edu>

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
        document.title = this.myName + " - " + this.currentTranslate.title + " CV";

        async function waitAndPrint() {
            await helpers.delay(2000)
            window.print();

            let pr = helpers.getAllUrlParameters()
            pr["page"] = "main";
            helpers.redirectWithUrlParams("/", pr);
        }
        waitAndPrint();
    }
}

</script>

<style scoped>
html {
    background-color: #ffffff;
}

#mainDivElement {
    margin: auto;
    max-width: 1200px;
}

/* #downloadPdfIcon:hover {
    filter: invert(1)
} */
</style>