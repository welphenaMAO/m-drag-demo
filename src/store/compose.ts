import { $ } from '@/utils/utils'
export default {
    namespaced: true,
    state: {
        editor: null,
    },
    mutations: {
        getEditor(state: any) {
            state.editor = $('#editor')
        },
    },
    actions: {
    },
    modules: {
    },
}
