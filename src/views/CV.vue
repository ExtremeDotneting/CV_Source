<template>
    <div id="mainDivElement">
        <v-row no-gutters class="mr-1 ml-n1" id="toPrintPdf">
            <v-col sm="12" md="12">
                <v-card class="elevation-11 ml-2 mt-0">
                    <CV_Top :hideTopButtons="false"></CV_Top>
                </v-card>
            </v-col>

            <v-col sm="12" md="8" style="page-break-after: avoid;">
                <v-card class="elevation-11 ml-2 mt-2">
                    <CV_WorkExp></CV_WorkExp>
                </v-card>

                <v-card class="elevation-11 ml-2 mt-2">
                    <CV_Edu></CV_Edu>
                </v-card>
            </v-col>

            <v-col sm="12" md="4" style="page-break-after: avoid;">
                <v-card class="elevation-11 ml-2 mt-2">
                    <CV_Skill></CV_Skill>
                    <CV_Lang></CV_Lang>
                    <CV_Contacts></CV_Contacts>
                </v-card>

                <v-card class="elevation-11 ml-2 mt-2">
                    <CV_AboutMe></CV_AboutMe>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import CV from "./CV"
export default CV
</script>

<style scoped>
html {
    background-color: #f2f2f2;
}

#mainDivElement {
    margin: auto;
    max-width: 1200px;
}

/* #downloadPdfIcon:hover {
    filter: invert(1)
} */
</style>