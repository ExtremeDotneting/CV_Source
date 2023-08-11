import MyCardTitle from '../components/MyCardTitle.vue';
import dataObj from '@/DataCV';
import helpers from '../core/helpers';
import { jsPDF } from "jspdf";
import CV_Top from "../components/CV_Top.vue"
import CV_WorkExp from '../components/CV_WorkExp.vue';
import CV_Edu from '../components/CV_Edu.vue';
import CV_AboutMe from '../components/CV_AboutMe.vue';
import CV_Skill from '../components/CV_Skill.vue';
import CV_Lang from '../components/CV_Lang.vue';
import CV_Contacts from '../components/CV_Contacts.vue';

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
            helpers.redirectWithUrlParams(
                "/pdf/",
                helpers.getAllUrlParameters()
            );
        }
    }
}