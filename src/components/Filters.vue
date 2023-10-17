<template>
    <div class="filter-cont">
        <input type="date" v-model="dateVal" @change="handleInput">
    </div>
</template>

<script>
export default {
    data() {
        return {
            dateVal: '',
            currentDate: ''
        }
    },
    mounted() {
        let d = new Date();
        let method = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
        this.currentDate = method;
    },
    methods: {
        handleInput() {
            console.log(this.dateVal)
            console.log(this.currentDate)
        }
    }
}
</script>

<style scoped lang="scss">
.filter-cont {
    // border: 1px solid red;
    width: 80%;
    margin: auto;

    input {
        
    }
}
</style>