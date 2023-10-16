<template>
    <Category :categoryVal="categoryVal" />
</template>

<script>
import Category from '../components/Category.vue';

export default {
    data() {
        return {
            categoryVal: "sports"
        }
    },
    components: {
        Category,
    }
}
</script>