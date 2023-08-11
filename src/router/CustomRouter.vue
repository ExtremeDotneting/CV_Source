<template>
    <CV_AsPdf v-if="isCurrentPage('pdf')"></CV_AsPdf>

    <!-- Main page-->
    <CV v-if="isCurrentPage('main') || !isMatchedOnce"></CV>
</template>

<script>
import CV from '@/views/CV.vue';
import CV_AsPdf from '@/views/CV_AsPdf.vue';

export default {
    components: {
        CV, CV_AsPdf
    },
    data() {
        return {
            isMatchedOnce: false
        };
    },

    methods: {
        isCurrentPage(pageName) {
            var str = window.location.search + "";
            str = str.toLowerCase();
            let keyword = "page=" + pageName;
            return str.includes(keyword);
        }
    }
}
</script>
