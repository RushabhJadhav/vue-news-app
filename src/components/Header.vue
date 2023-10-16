<template>
    <header class="nav-header">
        <h1 class="logo">News App</h1>
        <ul>
            <li><RouterLink to="/" >Home</RouterLink></li>    
            <li><RouterLink to="/local" >Local</RouterLink></li>
            <li><RouterLink to="/" >World</RouterLink></li>
            <li><RouterLink to="/business" >Bussiness</RouterLink></li>
            <li><RouterLink to="/technology" >Technology</RouterLink></li>
            <li><RouterLink to="/" >Entertainmaint</RouterLink></li>
            <li><RouterLink to="/" >Sports</RouterLink></li>
            <li><RouterLink to="/" >Science</RouterLink></li>
            <li><RouterLink to="/" >Health</RouterLink></li>
        </ul>
        <div class="searchBar">
            <input type="text" v-model="inputVal">
            <button @click="handleSearch">search</button>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            inputVal: ''
        }
    },
    components: { RouterLink },
    emits: ['getSearchValue'],
    methods: {
        handleSearch() {
            this.$emit('getSearchValue', this.inputVal)
            this.inputVal = ""
        }
    }
}
</script>

<style scoped lang="scss">
</style>