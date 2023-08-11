<template>
    <MyCardTitle :title="languagesTitle" icon="mdi-translate" class="mt-2"> </MyCardTitle>
    <v-card-text>
        <v-list-item v-for="item in languagesList" class="ml-n1 mb-n1" size="small">
            <h3 class="headline  text-workTimelineTitleColor" style="display:inline">
                {{ item.lang }} -
            </h3>
            <h4 class="headline font-weight-light font-italic" style="display:inline">
                {{ item.text }}
            </h4>
        </v-list-item>
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