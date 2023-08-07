<template>
    <v-card class="elevation-13 ml-2 mt-2">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4 text-cardsTitleColor">
            <v-btn v-if="icon" color="cardsCircleColor" class="elevation-0 mr-2" :ripple="false" icon>
                <v-icon color="cardsIconColor" :icon="icon"></v-icon>
            </v-btn>
             {{ title }}
        </v-card-title>

        <slot></slot>
    </v-card>
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