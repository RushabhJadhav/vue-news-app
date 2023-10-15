<template>
    <Category :categoryVal="categoryVal" />
</template>

<script>
import Category from '../components/Category.vue';

export default {
    data() {
        return {
            categoryVal: "business"
        }
    },
    components: {
        Category,
    }
}
</script>