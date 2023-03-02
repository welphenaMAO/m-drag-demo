<template>
    <div
        id="editor"
        class="editor"
        :class="{ edit: isEdit }"
        :style="{
            ...getCanvasStyle(canvasStyleData),
            width: changeStyleWithScale(canvasStyleData.width) + 'px',
            height: changeStyleWithScale(canvasStyleData.height) + 'px',
        }"
        @contextmenu="handleContextMenu"
        @mousedown="handleMouseDown"
    >
        <!-- 网格线 -->
        <Grid />

        <!-- 页面组件列表展示 -->
        <Shape
            v-for="(item, index) in componentData"
            :key="item.id"
            :default-style="item.style"
            :style="getShapeStyle(item.style)"
            :active="item.id === (curComponent || {}).id"
            :element="item"
            :index="index"
            :class="{ lock: item.isLock }"
        >
            <component
                v-if="item.component.startsWith('SVG')"
                :is="item.component" />
            <component
                v-else-if="item.component !== 'VText'"
                :is="item.component"
                :element="item"
                :id="'component' + item.id"
                class="component"
                :style="getComponentStyle(item.style)"
                :prop-value="item.propValue"
                :request="item.request" />
            <component
                v-else
                :is="item.component" />
        </Shape>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Grid from './Grid.vue'
import Shape from './Shape.vue'
import { getStyle, getCanvasStyle, getShapeStyle } from '@/utils/style'
import { changeStyleWithScale } from '@/utils/translate'
import { namespace } from 'vuex-class'
const editorModule = namespace('editorVuex')

@Component({
    components: {
        Grid,
        Shape,
    },
})
export default class Editor extends Vue {
    @editorModule.State(state => state.canvasStyleData) canvasStyleData: canvasTypes
    @editorModule.State(state => state.componentData) componentData: Array<any>
    @editorModule.State(state => state.curComponent) curComponent: any

    isEdit = false
    changeStyleWithScale = changeStyleWithScale
    getCanvasStyle = getCanvasStyle
    getShapeStyle = getShapeStyle
    svgFilterAttrs = ['width', 'height', 'top', 'left', 'rotate'] as Array<string>


    handleContextMenu(e: Event) {
        console.log('e', e)
    }

    handleMouseDown(e: Event) {
        console.log('e', e)
    }
    // 获取样式
    getComponentStyle(style: any) {
        return getStyle(style, this.svgFilterAttrs)
    }

    mounted() {
        // 获取编辑器元素
        this.$store.commit('composeVuex/getEditor')
        // console.log('changeStyleWithScale ??', this.changeStyleWithScale(400))
    }
}
</script>

<style scoped lang="scss">
  .editor {
    position: relative;
    background: #fff;
    margin: auto;

    .lock {
      opacity: .5;

      &:hover {
        cursor: not-allowed;
      }
    }
  }

  .edit {
    .component {
      outline: none;
      width: 100%;
      height: 100%;
    }
  }
</style>
