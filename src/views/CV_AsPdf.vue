<template>
    <div id="mainDivElement">
        <v-row no-gutters id="toPrintPdf">
            <v-col>

                <CV_Top :hideTopButtons="true"></CV_Top>

                <CV_Skill></CV_Skill>

                <CV_WorkExp></CV_WorkExp>

                <CV_Lang></CV_Lang>

                <CV_Contacts></CV_Contacts>

                <CV_Edu></CV_Edu>

                <CV_AboutMe></CV_AboutMe>

            </v-col>
        </v-row>
    </div>
</template>

<script>
import CV from "./CV"
import helpers from "../core/helpers"


async function waitAndPrint() {
    await helpers.delay(2000)
    window.print();
    helpers.redirectWithUrlParams(
        "/",
        helpers.getAllUrlParameters()
    );
}
waitAndPrint();

export default CV;
</script>

<style scoped>
html {
    background-color: #ffffff;
}

#mainDivElement {
    margin: auto;
    max-width: 1200px;
}

/* #downloadPdfIcon:hover {
    filter: invert(1)
} */
</style>