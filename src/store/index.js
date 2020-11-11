import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        github: { public_repos: "00", public_gists: "00", followers: "00" },
        stackoverflow: {
            reputation: "00",
            badge_counts: {
                gold: "00",
                silver: "00",
                bronze: "00"
            },
            reputation_change_year: "00",
            reputation_change_quarter: "00",
            reputation_change_month: "00",
            reputation_change_week: "00",
            reputation_change_day: "00",
        },
        medium: {
            article_count: "00",
            followers: "00",
            following: "00"
        },
        qwiklabs: {
            quests: "00",
            labs: "00"
        }
    },
    mutations: {
        SET_GITHUB(state, payload) {
            state.github = payload;
        },
        SET_STACKOVERFLOW(state, payload) {
            state.stackoverflow = payload;
        },
        SET_MEDIUM(state, payload) {
            state.medium = payload;
        },
        SET_QWIKLABS(state, payload) {
            state.qwiklabs = payload;
        },
    },
    actions: {
        loadAPIData({ commit }) {
            axios
                .get("https://nuwan94.herokuapp.com/github")
                .then((r) => r.data)
                .then((payload) => {
                    commit("SET_GITHUB", payload);
                });
            axios
                .get("https://nuwan94.herokuapp.com/stackoverflow")
                .then((r) => r.data)
                .then((payload) => {
                    commit("SET_STACKOVERFLOW", payload);
                });
            axios
                .get("https://nuwan94.herokuapp.com/medium")
                .then((r) => r.data)
                .then((payload) => {
                    commit("SET_MEDIUM", payload);
                });
            axios
                .get("https://nuwan94.herokuapp.com/qwiklabs")
                .then((r) => r.data)
                .then((payload) => {
                    commit("SET_QWIKLABS", payload);
                });
        },
    },
});