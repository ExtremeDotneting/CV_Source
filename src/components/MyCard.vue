<template>
    <v-card class="elevation-13">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">
            <v-btn v-if="icon" color="#395a9d" class="elevation-0 mr-2" :ripple="false" icon>
                <v-icon color="#e4ecfa" :icon="icon"></v-icon>
            </v-btn>
            <font color="#595667"> {{ title }}</font>
        </v-card-title>
        <v-card-text>
            {{ text }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        text: String,
        icon: String,
        title: String
    }
}
</script>