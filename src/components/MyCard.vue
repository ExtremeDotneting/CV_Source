<template>
    <v-card class="elevation-11 ml-2 mt-2">
        <MyCardTitle :title="title" :icon="icon"></MyCardTitle>
        <slot></slot>
    </v-card>
</template>

<script>
import MyCardTitle from "./MyCardTitle.vue"

export default {
    components: {
        MyCardTitle
    },
    data() {
        return {
        }
    },
    props: {
        icon: String,
        title: String
    }
}
</script>