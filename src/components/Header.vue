<template>
    <header>
        <h1 class="logo">News App</h1>
        <ul>
            <!-- <li><a href="">Home</a></li>
            <li><a href="">More</a></li>
            <li><a href="">More</a></li>
            <li><a href="">More</a></li>
            <li><a href="">More</a></li>     -->
            <li><RouterLink to="/" >home</RouterLink></li>    
            <li><RouterLink to="/about" >more</RouterLink></li>    
            <li><RouterLink to="/about" >more</RouterLink></li>    
            <li><RouterLink to="/about" >more</RouterLink></li>    
            <li><RouterLink to="/about" >more</RouterLink></li>    
        </ul>
        <div class="searchBar">
            <input type="text">
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink }
}
</script>

<style scoped lang="scss">
header {
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10%;
    margin-bottom: 20px;

    ul {
        display: inherit;

        li {
            list-style-type: none;
            margin: 0 20px;
            font-size: 1.3rem;

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