//gGitHub 登录材料
let clientId = "de98ee996939961d39d9";
let redirectUri = (location.port ? 'http://192.168.137.1:3000/oauth' : 'https://shonesinglone.github.io/oauth');
// let hostName = (location.port ? 'http://192.168.137.1:3000' : 'https://shonesinglone.leanapp.cn') + '/n/wiichat';

let githubAuthorizeUrl = new URL(
    "https://github.com/login/oauth/authorize"
);
githubAuthorizeUrl.searchParams.append("client_id", clientId);
githubAuthorizeUrl.searchParams.append("redirect_uri", redirectUri);
githubAuthorizeUrl.searchParams.append("scope", "user");


const state = {
    appSize: {
        height: 0,
        width: 0
    },
    currentPath: "",
    currentMode: 0, // pc: 1, mobile: 2 default:false
    githubAuthorizeUrl: githubAuthorizeUrl,
    //localstorage  
    userInfo: false, //also flag for isLogin
};

const getters = {
    appHeight(state) {
        return state.appSize.height;
    },
    appWidth(state) {
        return state.appSize.width;
    },
    currentPath(state) {
        return state.currentPath;
    },
    currentMode(state) {
        return state.currentMode;
    },
    githubAuthorizeUrl(state) {
        return state.githubAuthorizeUrl;
    },
    userInfo(state) {
        return state.userInfo;
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
    logout(state) {
        localStorage.setItem('userInfo', "");
        state.userInfo = false;
    },
    setUserInfo(state) {
        // localStorage是同步的
        try {
            let userInfoString = localStorage.getItem('userInfo');
            let {
                name,
                token,
                avatar
            } = JSON.parse(userInfoString);
            if (name && token && avatar) {
                state.userInfo = {
                    name,
                    token,
                    avatar
                };
            } else {
                throw new Error("Not Login");
            }
        } catch (error) {
            console.log(error);
            state.userInfo = false;
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}