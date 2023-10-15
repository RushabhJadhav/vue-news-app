<template>
    <Headline :regionalCode="regionalCode" />
</template>

<script>
import Headline from '../components/Headline.vue';

export default {
    data() {
        return {
            regionalCode: "in"
        }
    },
    components: {
        Headline,
    }
}
</script>

