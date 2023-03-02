export default {
    namespaced: true,
    state: {
        // 编辑器模式 edit preview
        editMode: 'edit',
        // 页面全局数据
        canvasStyleData: {
            width: 1200,
            height: 740,
            scale: 100,
            color:'#000',
            opacity: 1,
            background: '#fff',
            fontSize: 14,
        },
        // 是否在编辑器中，用于判断复制、粘贴组件时是否生效，如果在编辑器外，则无视这些操作
        isInEditor: false,
        // 画布组件数据
        componentData: [],
        curComponent: null,
        curComponentIndex: null,
        // 点击画布时是否点中组件，主要用于取消选中组件用。
        // 如果没点中组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
        isClickComponent: false,
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
}


