<template>
    <v-card-title class="text-h5 text-cardsTitleColor">
        <v-btn v-if="icon" color="cardsCircleColor" class="elevation-0 mr-2" style="zoom: 0.9;" :ripple="false" icon>
            <v-icon color="cardsIconColor" :icon="icon"></v-icon>
        </v-btn>
        {{ title }}
    </v-card-title>
</template>

<script>
export default {
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