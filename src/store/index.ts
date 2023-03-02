import Vue from 'vue'
import Vuex from 'vuex'
import editorVuex from './editor'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        editorVuex,
    },
})
