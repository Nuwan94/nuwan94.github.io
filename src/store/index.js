import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        github: { public_repos: "00", public_gists: "00", followers: "00" },
        stackoverflow: {
            reputation: "00",
            reputation_change_year: "00",
            reputation_change_quarter: "00",
            reputation_change_month: "65",
            reputation_change_week: "00",
            reputation_change_day: "00",
        },
    },
    mutations: {
        SET_GITHUB(state, payload) {
            state.github = payload;
        },
        SET_STACKOVERFLOW(state, payload) {
            state.stackoverflow = payload;
        },
    },
    actions: {
        loadAPIData({ commit }) {
            axios
                .get("http://api.nuwan.dev/github")
                .then((r) => r.data)
                .then((payload) => {
                    commit("SET_GITHUB", payload);
                });
            axios
                .get("http://api.nuwan.dev/stackoverflow")
                .then((r) => r.data)
                .then((payload) => {
                    commit("SET_STACKOVERFLOW", payload);
                });
        },
    },
});