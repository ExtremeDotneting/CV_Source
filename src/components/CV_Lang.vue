<template>
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