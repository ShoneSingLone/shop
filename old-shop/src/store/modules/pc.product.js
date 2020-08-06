const state = {
    scrollY: 0,
    directionY: 0
};

const getters = {
    appHeight(state) {
        return state.appSize.height;
    },
}
const actions = {
    setAppSize({
        commit
    }, rect) {
        return commit('setAppSize', rect)
    },
}
const mutations = {
    setScrollY(state, y) {
        state.scrollY = y;
    },
    setDirectionY(state, direction) {
        state.directionY = direction;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}