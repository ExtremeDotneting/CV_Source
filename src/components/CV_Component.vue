<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="12" md="12" class="pa-1">
                <MyCard :title="myName" text="1<br>2"></MyCard>
            </v-col>

            <v-col sm="12" md="8" class="pa-1">
                <MyCard :title="aboutMeTitle" :text="aboutMeText" :icon="aboutMeIcon"></MyCard>
            </v-col>

            <v-col sm="12" md="4" class="pa-1">
                <MyCard :title="skillsTitle" :icon="skillsIcon" class="pb-2">
                    <v-bind:text>
                        <v-chip-group>
                            <v-chip variant="outlined" v-for="skill in skills">
                                {{ skill }}
                            </v-chip>
                        </v-chip-group>
                    </v-bind:text>
                </MyCard>

                <v-card class="elevation-13 pa-2">
                    <p v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">++++ {{ num }} ++++</p>
                </v-card>

            </v-col>
        </v-row>
    </v-container>

    <!-- <div class="d-flex flex-wrap ">
        <div class="ma-0 pa-1 bg-surface-variant w-50">
            <v-card class="elevation-13 pa-2">
                <p
                    v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]">
                    {{ num }} string !!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
                <p
                    v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]">
                    {{ num }} string !!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
            </v-card>

        </div>

        <div class="ma-0 pa-1 bg-surface-variant w-50">
            <v-card class="elevation-13 pa-2 mb-2">
                <v-chip-group>
                    <v-chip variant="outlined" v-for="skill in skills">
                        {{ skill }}
                    </v-chip>
                </v-chip-group>
            </v-card>

            <v-card class="elevation-13 pa-2">
                <p v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">++++ {{ num }} ++++</p>
            </v-card>
        </div>

    </div> -->
</template>


<script>
import MyCard from './MyCard.vue'

export default {
    components: {
        MyCard
    },
    data() {
        return {
            myName: "YURII MYSKO",

            aboutMeTitle: "ABOUT ME",
            aboutMeIcon: "mdi-account",
            aboutMeText: "Hi! Hi! Hi! Hi! \nHi! Hi! Hi! Hi! \nHi! Hi! Hi! Hi! \nHi! Hi! Hi! Hi! \n",

            skillsTitle: "SKILLS",
            skillsIcon: "mdi-pencil-ruler",
            skills: ["C#", ".NET"]
        }
    },

    mounted() {

    }
}
</script>