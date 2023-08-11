<template>
    <div id="mainDivElement">
        <v-row no-gutters id="toPrintPdf">
            <v-col>

                <CV_Top :thisModel="this" :hideTopButtons="true"></CV_Top>

                <CV_Skill :thisModel="this"></CV_Skill>

                <CV_WorkExp :thisModel="this"></CV_WorkExp>

                <CV_Lang :thisModel="this"></CV_Lang>
                
                <CV_Contacts :thisModel="this"></CV_Contacts>

                <CV_Edu :thisModel="this"></CV_Edu>

                <CV_AboutMe :thisModel="this"></CV_AboutMe>

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