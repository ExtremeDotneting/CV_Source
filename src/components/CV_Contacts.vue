<template>

    <MyCardTitle :title="contactsTitle" :icon="contactsIcon" class="mt-2 mb-n1"> </MyCardTitle>
    <v-card-text>
        <v-list density="compact">
            <v-list-item v-for="(cont, i) in contactsList" :key="i" class="ml-n1 mb-n1">
                <template v-slot:prepend>
                    <v-icon v-if="cont.icon" :icon="cont.icon" class="mr-2"></v-icon>
                    <img v-if="cont.image" :src="cont.image" class="mr-2" width="20">
                </template>
                <v-list-item-title>
                    <a :href="cont.url">{{ cont.text }}</a>
                </v-list-item-title>
            </v-list-item>
        </v-list>
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