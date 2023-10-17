<template>
    <Header @getSearchValue="searchData"></Header>
    <div class="news-cont">
        <h1>Top Stories</h1>
        <hr>
        <div class="news-card" v-for="(item, index) in getNews">
            <h2>{{ item.title }}</h2>
            <img class="news-image" :src="item.urlToImage" alt="image not available">
            <p>{{ item.source.name }}</p>
            <p v-if="item.author != null" >Author : {{ item.author }}</p>
            <p>{{ item.description }} <a :href="item.url" target="_blank">read more...</a></p>
            <p>Published On : {{ formatDate(item.publishedAt) }}</p>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            getSearchValue: ''
        }
    },
    props: ['regionalCode'],
    components: {
        Header,
    },
    mounted() {
        this.fetchNews(this.regionalCode)
    },
    computed: {
        ...mapGetters(['getNews'])
    },
    methods: {
        ...mapActions(['fetchNews', 'searchNews']),
        searchData(val) {
            this.searchNews(val)
        },
        formatDate(val) {
            let d = new Date(val);
            return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
        }
    }
}
</script>

<style scoped lang="scss">
</style>