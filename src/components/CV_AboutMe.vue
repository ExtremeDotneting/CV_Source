<template>
    <MyCardTitle :title="aboutMeTitle" icon="mdi-account"></MyCardTitle>
    <v-card-text v-html="aboutMeText">
    </v-card-text>
</template>


<script>
import MyCardTitle from "./MyCardTitle.vue";

export default {
    components: {
        MyCardTitle
    },
    data() {
        return this.thisModel;
    },
    props: ['thisModel'],
    created() {
        // props are exposed on `this`
        console.log(this.thisModel)
    }
}
</script>