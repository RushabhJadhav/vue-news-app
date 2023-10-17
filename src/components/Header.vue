<template>
    <header>
        <h1 class="logo"><RouterLink to="/">News App</RouterLink></h1>
        <ul>
            <li><RouterLink to="/" >Home</RouterLink></li>    
            <li><RouterLink to="/local" >Local</RouterLink></li>
            <li><RouterLink to="/world" >World</RouterLink></li>
            <li><RouterLink to="/business" >Bussiness</RouterLink></li>
            <li><RouterLink to="/technology" >Technology</RouterLink></li>
            <li><RouterLink to="/entertainment" >Entertainment</RouterLink></li>
            <li><RouterLink to="/sports" >Sports</RouterLink></li>
            <li><RouterLink to="/science" >Science</RouterLink></li>
            <li><RouterLink to="/health" >Health</RouterLink></li>
            <li><RouterLink to="/source" >Source</RouterLink></li>
        </ul>
        <div class="searchBar">
            <input type="text" v-model="inputVal" @keypress.enter="handleSearch">
            <font-awesome-icon class="search-icon" icon="fa-solid fa-search" @click="handleSearch" />
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
            if(this.inputVal.length !== 0) {
                this.$emit('getSearchValue', this.inputVal)
                this.inputVal = ""
            }
        }
    }
}
</script>

<style scoped lang="scss">
</style>