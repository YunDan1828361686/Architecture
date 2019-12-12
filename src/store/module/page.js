export default {
    state: {
        // 通过Tab_amplification页面里的Tab跳转至Double_amplification需携带的数据
        Double_amplification: ""
    },
    getters: {
    },
    mutations: {
        Double_amplification_click(state, payload) {
            state.Double_amplification = payload;
        },
    },
    actions: {

    }
}
