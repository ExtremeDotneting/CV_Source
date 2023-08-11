<template>
    <MyCardTitle :title="educationTitle" :icon="educationIcon"></MyCardTitle>
    <v-card-text v-html="educationText">
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