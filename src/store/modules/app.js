const state = {
    appSize: {
        height: 0,
        width: 0
    },
    currentPath: "",
    currentMode: 0, // pc: 1, mobile: 2 default:false
};

const getters = {
    appHeight(state) {
        return state.appSize.height;
    },
    appWidth(state) {
        return state.appSize.width;
    },
    currentPath(state) {
        return state.currentPath
    },
    currentMode(state) {
        return state.currentMode
    }
}
const actions = {
    setCurrentPath({
        commit
    }, path) {
        return commit('setCurrentPath', path)
    },
}
const mutations = {
    setAppSize(state, {
        height,
        width,
    }) {
        state.appSize.height = Math.ceil(height);
        state.appSize.width = Math.ceil(width);
    },
    setCurrentPath(state, path) {
        state.currentPath = path;
    },
    setCurrentMode(state, mode) {
        state.currentMode = mode;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}