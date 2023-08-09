<template>
    <v-card class="elevation-11 ml-2 mt-2">
        <v-img height="130" src="/images/titleBackground.png" cover style="z-index: -10;">
            <v-card-title class="text-h5 text-white " style="z-index:1000;">
                <div class="float-right mt-1" align="right">
                    <v-btn class="elevation-0" color="cardsCircleColor" height="40" @click="downloadPDF()">
                        <img src="/images/icons/downloadPDF.png" height="40" id="downloadPdfIcon">
                    </v-btn>
                    <div>
                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" class="elevation-0" color="cardsCircleColor">
                                    <img :src="`https://flagcdn.com/w40/${currentTranslate.flagName}.png`" width="26"
                                        height="18"> ▾
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="(item, index) in otherTranslates" :key="index"
                                    @click="changeTranslation(item.shortName)">
                                    <v-list-item-title align="center">
                                        <img :src="`https://flagcdn.com/w40/${item.flagName}.png`" width="26" height="18">
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <div class="text-h4" style="margin-left: 130px;margin-top: 30px;">{{ myName }}</div>
                <div class="text-h6 font-italic" style="margin-left: 130px;">{{ workPosition }}</div>
            </v-card-title>
        </v-img>


        <img src="/images/portraits/portrait.jpg" width="100" height="120" class="ml-8 rounded-sm elevation-9"
            style="border: 1px solid; border-color: black; margin-top: -100px;">

    </v-card>
</template>

<script>
import MyCardTitle from "./MyCardTitle.vue"

export default {
    components: {
        MyCardTitle
    },
    data() {
        return this.overrideData;
    },
    props: ['overrideData'],
    created() {
        // props are exposed on `this`
        console.log(this.overrideData)
    }
}
</script>