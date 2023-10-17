<template>
    <div>
        <ul v-for="(item, index) in data">
            <li>
                <h2>{{ item.name }}</h2>
                <p>{{ item.description }}</p>
                <p>{{ item.category }}</p>
                <p>{{ item.language }}</p>
                <p>{{ item.country }}</p>
            </li>
            <hr>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: '',
        }
    },
    mounted() {
        this.fetchNews()
    },
    methods: {
        fetchNews() {
            fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=6e66a5a2bd884fc5ba13195ed5187194')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.data = data.sources
            })
        }
    }
}
</script>

<style></style>