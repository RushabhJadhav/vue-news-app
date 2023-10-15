<template>
    <Header @getSearchValue="testMethod"></Header>
    <div class="news-cont">
        <div class="news-card" v-for="(item, index) in getNews">
            <h2>{{ item.title }}</h2>
            <img class="news-image" :src="item.urlToImage" alt="image not available">
            <p>{{ item.source.name }}</p>
            <p>Published On : {{ item.publishedAt }}</p>
            <p v-if="item.author != null" >Author : {{ item.author }}</p>
            <p>{{ item.description }} <a :href="item.url" target="_blank">read more...</a></p>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            count: 0,
            apiKey: '6e66a5a2bd884fc5ba13195ed5187194',
            data: '',
            getSearchValue: ''
        }
    },
    components: {
        Header,
    },
    mounted() {
        this.fetchNews()
    },
    computed: {
        ...mapGetters(['getNews'])
    },
    methods: {
        ...mapActions(['fetchNews', 'searchNews']),
        increment() {
            this.count++;
        },
        decrement() {
            if(this.count > 0) {
                this.count--;
            }
        },
        testMethod(val) {
            // console.log(val)
            this.searchNews(val)
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