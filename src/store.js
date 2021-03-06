import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {counter: 0}
const mutations = {
    INCREMENT (state) {
        state.counter ++
    }
}

export default new Vuex.Store({
    state,
    mutations
})