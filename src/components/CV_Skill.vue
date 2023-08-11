<template>
    <MyCardTitle :title="skillsTitle" :icon="skillsIcon" class="mt-2"></MyCardTitle>
    <v-card-text>
        <div v-for="(skillGroup, index) in skills" class="">
            <v-chip  v-for="skill  in skillGroup" :color="`skillChipColor${index % 2}`" style="margin: 2px; zoom: 0.8;">
                {{ skill }}
            </v-chip>
        </div>
    </v-card-text>
</template>


<script>
import MyCardTitle from "./MyCardTitle.vue";

export default {
    components: {
        MyCardTitle
    },
    data() {
        return this.thisModel;
    },
    props: ['thisModel'],
    created() {
        // props are exposed on `this`
        console.log(this.thisModel)
    }
}
</script>