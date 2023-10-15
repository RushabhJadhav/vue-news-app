import { createStore } from "vuex";

let apiKey = '6e66a5a2bd884fc5ba13195ed5187194';

const store = createStore({
    state: {
        headline: []
    },
    getters: {
        getNews: state => state.headline
    },
    mutations: {
        setNews(state, data) {
            state.headline = data.articles
        },
        setSearchedNews(state, data) {
            state.headline = data.articles
        }
    },
    actions: {
        fetchNews({commit}) {
            fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => commit('setNews', data))
        },
        searchNews({commit}, val) {
            fetch(`https://newsapi.org/v2/everything?q=${val}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => commit('setSearchedNews', data))
        },
    }
})

export default store
