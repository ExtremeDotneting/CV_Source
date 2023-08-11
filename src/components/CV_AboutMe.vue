<template>
    <MyCardTitle :title="aboutMeTitle" icon="mdi-account"></MyCardTitle>
    <v-card-text v-html="aboutMeText">
    </v-card-text>
</template>


<script>
import MyCardTitle from "./MyCardTitle.vue";
import DataCV from "@/core/DataCV";

export default {
    components: {
        MyCardTitle
    },
    data() {
        return DataCV;
    }
}
</script>