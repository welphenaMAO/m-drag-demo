<template>
    <div
        id="editor"
        class="editor"
        :class="{ edit: isEdit }"
        :style="{
            width: changeStyleWithScale(canvasStyleData.width) + 'px',
            height: changeStyleWithScale(canvasStyleData.height) + 'px',
        }"
        @contextmenu="handleContextMenu"
        @mousedown="handleMouseDown"
    >
        <!-- 网格线 -->
        <Grid />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Grid from './Grid.vue'
import { changeStyleWithScale } from '@/utils/translate'
import { namespace } from 'vuex-class'
const someModule = namespace('editorVuex')

@Component({
    components: {
        Grid,
    },
})
export default class Editor extends Vue {
    @someModule.State(state => state.canvasStyleData) canvasStyleData: canvasTypes
    isEdit = false
    changeStyleWithScale = changeStyleWithScale


    handleContextMenu(e: Event) {
        console.log('e', e)
    }

    handleMouseDown(e: Event) {
        console.log('e', e)
    }
    mounted() {
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
