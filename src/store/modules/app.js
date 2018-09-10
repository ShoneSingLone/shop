const state = {
    appSize: {
        height: 0,
        width: 0
    }
};

const getters = {
    appHeight(state) {
        return state.appSize.height;
    },
    appWidth(state) {
        return state.appSize.width;
    }
}
const actions = {
    setAppSize({
        commit
    }, rect) {
        return commit('setAppSize', rect)
    },
}
const mutations = {
    setAppSize(state, {
        height,
        width,
    }) {
        state.appSize.height = height;
        state.appSize.width = width;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}