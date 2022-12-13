import axios from 'axios'
const login = {
    namespaced: true,
    state: {
        isAuth: false,
        token: "",
    },
    getters: {
        watchAuth(state) {
            return state.isAuth;
        },
    },
    mutations: {
        onStart(state) {
            let AccessToken = localStorage.getItem("token");
            if (AccessToken) {
                state.isAuth = true;
                state.token = AccessToken;
                axios.defaults.headers.common["Authorization"] = "Token " + AccessToken;
            } else {
                state.isAuth = false;
                state.token = "";
                axios.defaults.headers.common["Authorization"] = "";
            }
        },
        login(state, token) {
            if (token) {
                state.isAuth = true;
                state.token = token;
                localStorage.setItem("token", token);
                axios.defaults.headers.common["Authorization"] = "Token " + token;
            } else {
                state.isAuth = false;
                state.token = "";
                localStorage.removeItem("token");
                axios.defaults.headers.common["Authorization"] = "";
            }
        },
        logOut(state) {
            state.isAuth = false;
            state.token = "";
            axios.defaults.headers.common["Authorization"] = "";
            localStorage.removeItem("token");
        },
    },
};

export default login;
