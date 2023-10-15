<template>
    <Header></Header>
    <div class="news-cont">
        <div class="news-card" v-for="(item, index) in data">
            <h2>{{ item.title }}</h2>
            <img class="news-image" :src="item.urlToImage" alt="image not available">
            <p>{{ item.source.name }}</p>
            <p>Published On : {{ item.publishedAt }}</p>
            <p>Author : {{ item.author }}</p>
            <p>{{ item.description }} <a :href="item.url" target="_blank">read more...</a></p>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    data() {
        return {
            count: 0,
            apiKey: '6e66a5a2bd884fc5ba13195ed5187194',
            data: ''
        }
    },
    components: {
        Header,
    },
    mounted() {
        this.callAPI()
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            if(this.count > 0) {
                this.count--;
            }
        },
        callAPI() {
            fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then(data => {
                this.data = data.articles
            })
        }
    }
}
</script>

<style scoped lang="scss">
.news-cont {
    width: 60%;
    margin: auto;

    .news-card {
        // border: 1px solid red;

        h2 {
            margin: 10px 0 20px 0;
            text-align: center;
        }

        p {
            padding: 10px 0;

            a {
                text-decoration: none;
                color: inherit
            }
        }

        .news-image {
            width: 100%;
        }
    }
}
</style>