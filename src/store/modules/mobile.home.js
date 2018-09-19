const state = {
    headerSize: {
        height: 48
    },
    footerSize: {
        height: 48
    }
};

const getters = {
    headerHeight(state) {
        return state.headerSize.height;
    },
    footerHeight(state) {
        return state.footerSize.height;
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
    setHeaderHeight(state, height) {
        state.headerSize.height = height;
    },
    setHooterHeight(state, height) {
        state.footerSize.height = height;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}