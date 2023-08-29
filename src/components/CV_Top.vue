<template>
    <v-img height="130" src="/images/titleBackground.png" cover style="z-index: -10;" class="mb-n2">
        <v-card-title class="text-white " style="z-index:1000;">
            <div class="float-right mt-4 mr-n7 mr-sm-0" align="right">
                <v-btn v-if="!isPdfVersion" class="elevation-0" color="cardsCircleColor" height="40" @click="downloadPDF()">
                    <img src="/images/icons/downloadPDF.png" height="40" id="downloadPdfIcon">

                </v-btn>
                <div v-if="!isPdfVersion">
                    <v-menu open-on-hover>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="elevation-0" color="cardsCircleColor">
                                <img :src="`https://flagcdn.com/w40/${getCurrentTranslate().flagName}.png`" width="20"
                                    height="15"> ▾
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item v-for="(item, index) in otherTranslates" :key="index"
                                @click="changeTranslation(item.shortName)">
                                <v-list-item-title align="center">
                                    <img :src="`https://flagcdn.com/w40/${item.flagName}.png`" width="20" height="15">
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
            <div class="text-md-h4 text-subtitle-1"
                :style="`margin-left: ${leftMarginForNameAndWorkPosition}px;margin-top: 30px;`">{{ myName }}</div>
            <div class="text-md-h6 text-subtitle-2 font-italic"
                :style="`margin-left: ${leftMarginForNameAndWorkPosition}px;`">{{ workPosition }}</div>
        </v-card-title>
    </v-img>


    <img v-if="showPortrait" id="portraitImg" src="/images/portraits/portrait.jpg" width="120" height="120"
        class="ml-sm-8 ml-5 rounded-sm elevation-9">

    <a :href="externalUrl" id="externalUrlElement" class="float-right " align="right">
        <v-btn v-if="isPdfVersion" variant="outlined" size="x-small">
            Open web version <v-icon icon="mdi-open-in-new"></v-icon>
        </v-btn>
    </a>
</template>

<script>
import MyCardTitle from "./MyCardTitle.vue";
import DataCV from "@/core/DataCV";
import helpers from "@/core/helpers";

export default {
    components: {
        MyCardTitle
    },
    data() {
        return DataCV;
    },
    props: {
        isPdfVersion: Boolean
    },
    computed: {
        leftMarginForNameAndWorkPosition: function () {
            if (this.showPortrait)
                return 140;
            else
                return 10;
        }
    },
    methods: {
        getCurrentTranslate() {
            return this["currentTranslate"];
        },
        changeTranslation(lang) {
            let pr = helpers.getAllUrlParameters()
            pr["lang"] = lang;
            helpers.redirectWithUrlParams("/", pr);
        },
        async downloadPDF() {
            let pdfFileName = "./pdfVersions/" + this.myName + " - " + this.currentTranslate.title + " CV.pdf";
            var isFileExists = await helpers.checkIfFileExsists(pdfFileName);
            if (isFileExists) {
                window.location.href = pdfFileName;
            } else {
                let pr = helpers.getAllUrlParameters()
                pr["page"] = "pdf";
                helpers.redirectWithUrlParams("/", pr);
            }
        }
    }
}
</script>

<style scoped>
#portraitImg {
    background-color: black;
    border-width: 2px;
    border-color: white;
    border-style: double;
    margin-top: -100px;

    /*border: 1px solid; border-color: black;  border-style: double;*/
}

#externalUrlElement {
    color: #ffffff;
    margin-top: -100px;
    margin-right: 10px;
}
</style>