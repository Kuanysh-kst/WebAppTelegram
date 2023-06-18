import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state: {
        users: [],
        user: null
    },

    getters: {
        CATEGORY_USERS: (state) => {
            return state.users;
        }
    },

    mutations : {
        SET_CATEGORY_USERS: (state , users) => {
            state.users = users;
        },
        SET_CATEGORY_USER: (state,user) => {
            state.user = user;
        }
    },

    actions: {
        GET_CATEGORY_USERS: async ({commit},id) => {
            axios.get(`http://localhost:8080/search/${id}`)
                .then(respnose =>{
                    commit('SET_CATEGORY_USERS',respnose.data);
                    console.log(respnose.data)
                })
        }
    }
})

export default store;