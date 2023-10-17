import { createStore } from "vuex";

let apiKey = '6e66a5a2bd884fc5ba13195ed5187194';

const store = createStore({
    state: {
        headline: [],
        categoryNews: []
    },
    getters: {
        getNews: state => state.headline,
        getCategoryNews: state => state.categoryNews
    },
    mutations: {
        setNews(state, data) {
            state.headline = data.articles
        },
        setSearchedNews(state, data) {
            state.headline = data.articles
        },
        setCategoryNews(state, data) {
            state.categoryNews = data.articles
        }
    },
    actions: {
        fetchNews({commit}, val) {
            fetch(`https://newsapi.org/v2/top-headlines?country=${val}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => commit('setNews', data))
        },
        categoryNews({commit}, val) {
            fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${val}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => commit('setNews', data))
        },
        searchNews({commit}, val) {
            fetch(`https://newsapi.org/v2/everything?q=${val}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => commit('setCategoryNews', data))
        },
    }
})

export default store
