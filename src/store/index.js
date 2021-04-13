import Vue from 'vue'
import Vuex from 'vuex'
import bank from './modules/bank'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {},
    state: {},
    getters: {},

    modules: {
        bank
    }
})

