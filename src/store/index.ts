import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const data = {
    state: {
        canvasStyleData: {
            width: 1200,
            height: 740,
            scale: 100,
            color:'#000',
            opacity: 1,
            background: '#fff',
            fontSize:14,
        },
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
}


export default new Vuex.Store(data)
