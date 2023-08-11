<template>
    <MyCardTitle :title="educationTitle" icon="mdi-school"></MyCardTitle>
    <v-card-text v-html="educationText">
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