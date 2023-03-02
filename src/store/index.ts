import Vue from 'vue'
import Vuex from 'vuex'
import editorVuex from './editor'
import composeVuex from './compose'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        editorVuex,
        composeVuex,
    },
})
