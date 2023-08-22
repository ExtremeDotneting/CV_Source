<template>

    <MyCardTitle :title="contactsTitle" icon="mdi-contacts" class="mt-2 mb-n1"> </MyCardTitle>
    <v-card-text>
        <v-list density="compact">
            <v-list-item v-for="(cont, i) in contactsList" :key="i" class="ml-n1 mb-n1">
                <template v-slot:prepend>
                    <v-icon v-if="cont.icon" :icon="cont.icon" class="mr-2"></v-icon>
                    <img v-if="cont.image" :src="`./images/icons/${cont.image}`" class="mr-2" width="20">
                </template>
                <v-list-item-title>
                    <a :href="cont.url" style="color:#301ef0">{{ cont.text }}</a>
                </v-list-item-title>
            </v-list-item>
        </v-list>
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