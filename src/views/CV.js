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
    }
}