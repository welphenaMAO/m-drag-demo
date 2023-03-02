<template>
    <div class="home">
        <Toolbar></Toolbar>

        <main>
            <!-- 左侧组件列表 -->
            <section class="left">
                <ComponentList />
                <RealTimeComponentList />
            </section>
            <!-- 中间画布 -->
            <section class="center">
                <div
                    class="content"
                    @drop="handleDrop"
                    @dragover="handleDragOver"
                    @mousedown="handleMouseDown"
                    @mouseup="deselectCurComponent"
                >
                    <Editor />
                </div>
            </section>
            <!-- 右侧属性列表 -->
            <section class="right">
                <el-tabs v-if="curComponent" v-model="activeName">
                    <el-tab-pane label="属性" name="attr">
                        <component :is="curComponent.component + 'Attr'" />
                    </el-tab-pane>
                    <el-tab-pane label="动画" name="animation">
                    </el-tab-pane>
                    <el-tab-pane label="事件" name="events"></el-tab-pane>
                </el-tabs>
            </section>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Toolbar from '@/components/Toolbar.vue'
import ComponentList from '@/components/ComponentList.vue'
import RealTimeComponentList from '@/components/RealTimeComponentList.vue'
import Editor from '@/components/Editor/index.vue'
import { namespace } from 'vuex-class'
const someModule = namespace('editorVuex')

interface curCom {
    component?: string;
    [key: string]: any;
}

@Component({
    components: {
        Toolbar,
        ComponentList,
        RealTimeComponentList,
        Editor,
    },
})
export default class Home extends Vue {
    @someModule.State(state => state.canvasStyleData) canvasStyleData: canvasTypes
    @someModule.State(state => state.curComponent) curComponent: curCom

    activeName = 'attr' as string
    // allState = getModule(canvasStyleData)

    handleDrop(e: Event) {
        e.preventDefault()
        e.stopPropagation()
    }

    handleDragOver(e: Event) {
        e.preventDefault()
    }

    handleMouseDown(e: Event) {
        e.stopPropagation()
    }

    deselectCurComponent(e: Event) {
        console.log('e', e)
    }
}
</script>
<style lang="scss">
  .home {
    height: 100vh;
    background: #fff;

    main {
      position:relative;
      height: calc(100% - 64px);

      .left {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 100%;

        & > div {
          overflow: auto;

          &:first-child {
            border-bottom: 1px solid #ddd;
          }
        }
      }

      .right {
        position: absolute;
        top: 0;
        right: 0;
        width: 288px;
        height: 100%;

        .el-select {
          width:100%;
        }
      }

      .center {
        overflow: auto;
        margin-right: 288px;
        margin-left: 200px;
        padding: 20px;
        height: 100%;
        background: #f5f5f5;

        .content {
          overflow: auto;
          width: 100%;
          height: 100%;
        }
      }
    }

    .placeholder {
      text-align: center;
      color: #333;
    }

    .global-attr {
      padding: 10px;
    }
  }
</style>
