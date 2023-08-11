<template>
    <MyCardTitle :title="workExpTitle" icon="mdi-briefcase"></MyCardTitle>
    <v-card-text>
        <v-timeline align="start" density="compact" class="mt-n3">
            <v-timeline-item v-for="(workItem, i) in workExpTimelineList" :key="i" dot-color="workTimelineDotsColor"
                size="small">
                <div class="mb-n1">
                    <h2 :class="`mt-n1 headline  text-workTimelineTitleColor mb-3`">
                        {{ workItem.companyName }}
                        <img v-for="companyLogo in workItem.companyLogos"
                            :src="`/images/companiesLogos/${companyLogo.fileName}`" :height="companyLogo.height"
                            :width="companyLogo.width" class="mb-n3 ml-1">
                    </h2>
                    <h3 :class="`mt-n1 headline font-weight-light `">
                        {{ workItem.position }}
                    </h3>
                    <div :class="`pt-1 headline font-weight-light font-italic text-${workTimelineTitleColor} mb-3`">
                        {{ workItem.dateOfWork }}
                    </div>
                    <div v-html="workItem.text">
                    </div>
                </div>
            </v-timeline-item>
        </v-timeline>
    </v-card-text>
</template>

<script>
import MyCardTitle from "./MyCardTitle.vue";
import DataCV from "@/core/DataCV";

export default {
    components: {
        MyCardTitle
    },
    data() {
        return DataCV;
    }
}
</script>