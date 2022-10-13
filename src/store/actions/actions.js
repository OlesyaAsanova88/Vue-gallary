
export default {
    ADD_TO_CART({ commit }, prodact) {
        commit('SET_CART', prodact)
    },
    DELETE_FROM_CART({ commit }, index) {
        commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({ commit }, index) {
        commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({ commit }, index) {
        commit('DECREMENT', index)
    },
    GET_SEARCH_VALUE_TO_VUEX({ commit }, value) {
        commit('SET_SEARCH_VALUE_TO_VUEX', value)
    },
}