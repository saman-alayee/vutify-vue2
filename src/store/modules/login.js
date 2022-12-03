import axios from 'axios'

const login = {
    namespaced: true,
    state: {
        isAuth: false,
        accessToken: "",
    },