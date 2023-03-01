<template>
    <div
        id="editor"
        class="editor"
        :class="{ edit: isEdit }"
        :style="{
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

@Component({
    components: {
        Grid,
    },
})
export default class Editor extends Vue {
    isEdit = false

    handleContextMenu(e: Event) {
        console.log('e', e)
    }

    handleMouseDown(e: Event) {
        console.log('e', e)
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
