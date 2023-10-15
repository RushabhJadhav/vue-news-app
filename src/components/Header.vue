<template>
    <header>
        <h1 class="logo">News App</h1>
        <ul>
            <li><RouterLink to="/" >Home</RouterLink></li>    
            <li><RouterLink to="/about" >more</RouterLink></li>    
            <li><RouterLink to="/about" >more</RouterLink></li>    
            <li><RouterLink to="/about" >more</RouterLink></li>    
            <li><RouterLink to="/about" >more</RouterLink></li>    
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
    methods: {
        handleSearch() {
            this.$emit('getSearchValue', this.inputVal)
            this.inputVal = ""
        }
    }
}
</script>

<style scoped lang="scss">
header {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    // border: 1px solid red;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10%;
    margin-bottom: 20px;
    background-color: #fff;
    border-bottom: 1px solid #ececec;

    ul {
        display: inherit;

        li {
            list-style-type: none;
            margin: 0 20px;
            font-size: 1.2rem;

            a {
                text-decoration: none;
                color: black;
            }
        }
    }

    input {
        height: 30px;
        width: 300px;
    }
}
</style>