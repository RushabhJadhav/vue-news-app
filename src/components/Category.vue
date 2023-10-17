<template>
    <Header @getSearchValue="searchData"></Header>
    <div class="news-cont">
        <div class="news-card" v-for="(item, index) in getCategoryNews">
            <img class="news-image" :src="item.urlToImage" alt="image not available">
            <h2>{{ item.title }}</h2>
            <p>{{ item.source.name }}</p>
            <p v-if="item.author != null" >Author : {{ item.author }}</p>
            <p>{{ item.description }} <a :href="item.url" target="_blank">read more...</a></p>
            <p>{{ item.publishedAt }}</p>
        </div>
    </div>
</template>

<script>
import Header from './Headline.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            getSearchValue: ''
        }
    },
    props: ['categoryVal'],
    components: {
        Header,
    },
    mounted() {
        if(this.categoryVal == 'mumbai' || 'world') {
            this.searchNews(this.categoryVal)
        } else {
            this.categoryNews(this.categoryVal)
            console.log(this.categoryVal)
        }
    },
    computed: {
        ...mapGetters(['getCategoryNews'])
    },
    methods: {
        ...mapActions(['categoryNews', 'searchNews']),
        searchData(val) {
            this.searchNews(val)
        },
    }
}
</script>

<style scoped lang="scss">
</style>