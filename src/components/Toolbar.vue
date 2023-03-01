<template>
    <div>
        <div class="toolbar">
            <el-button @click="handleAceEditorChange">JSON</el-button>
            <el-button @click="undo">撤销</el-button>
            <el-button @click="redo">重做</el-button>
            <label for="input" class="insert">
                插入图片
                <input
                    id="input"
                    type="file"
                    hidden
                />
                <!-- @change="handleFileChange($event)" -->
            </label>
            <el-button class="preview" @click="preview(false)">预览</el-button>
            <el-button @click="save">保存</el-button>
            <el-button @click="clearCanvas">清空画布</el-button>
            <!-- :disabled="!areaData.components.length" -->
            <el-button @click="compose">组合</el-button>
            <!-- :disabled="!curComponent || curComponent.isLock || curComponent.component !== 'Group'" -->
            <el-button
                @click="decompose"
            >
                拆分
            </el-button>
            <!-- :disabled="!curComponent || curComponent.isLock" -->
            <el-button @click="lock">锁定</el-button>
            <!-- :disabled="!curComponent || !curComponent.isLock" -->
            <el-button @click="unlock">解锁</el-button>
            <el-button @click="preview(true)">截图</el-button>

            <div class="canvas-config">
                <span>画布大小</span>
                <input v-model="canvasStyleData.width">
                <span>*</span>
                <input v-model="canvasStyleData.height">
            </div>
            <div class="canvas-config">
                <span>画布比例</span>
                <input v-model="scale" @input="handleScaleChange"> %
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import toast from "@/utils/toast"
// import { commonStyle, commonAttr } from "@/custom-component/component-list"

@Component
export default class Toolbar extends Vue {
    isShowAceEditor = false
    isScreenshot = false
    isShowPreview = false
    canvasStyleData = {
        width: 0,
        height: 0,
    }
    scale = 100
    timer = 0

    // 画布比例
    handleScaleChange() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            // 画布比例设一个最小值，不能为 0
            this.scale = (~~this.scale) || 1
            // changeComponentsSizeWithScale(this.scale)
        }, 1000)
    }

    // JSON
    handleAceEditorChange() {
        this.isShowAceEditor = !this.isShowAceEditor
    }

    // 撤销
    undo() {
        // this.$store.commit('undo')
    }

    // 重做
    redo() {
        // this.$store.commit('redo')
    }

    // 插入图片
    // handleFileChange(e: Event): void {
    // const file = (e.target as HTMLInputElement).files[0]

    // if (!file.type.includes('image')) {
    //     toast('只能插入图片')
    //     return
    // }

    // const reader = new FileReader()
    // reader.onload = (res) => {
    //     const fileResult = (res.target as Event | null).result
    //     const img = new Image()
    //     img.onload = () => {
    //         const component = {
    //             ...commonAttr,
    //             id: generateID(),
    //             component: 'Picture',
    //             label: '图片',
    //             icon: '',
    //             propValue: {
    //                 url: fileResult,
    //                 flip: {
    //                     horizontal: false,
    //                     vertical: false,
    //                 },
    //             },
    //             style: {
    //                 ...commonStyle,
    //                 top: 0,
    //                 left: 0,
    //                 width: img.width,
    //                 height: img.height,
    //             },
    //         }

    //         // 根据画面比例修改组件样式比例 https://github.com/woai3c/visual-drag-demo/issues/91
    //         changeComponentSizeWithScale(component)

    //         this.$store.commit('addComponent', { component })
    //         this.$store.commit('recordSnapshot')

    //         // 修复重复上传同一文件，@change 不触发的问题
    //         $('#input').setAttribute('type', 'text')
    //         $('#input').setAttribute('type', 'file')
    //     }

    //     img.src = fileResult
    // }

    // reader.readAsDataURL(file)
    // }

    // 预览
    preview(isScreenshot: boolean) {
        this.isScreenshot = isScreenshot
        this.isShowPreview = true
        // this.$store.commit('setEditMode', 'preview')
    }

    // 保存
    save() {
        // localStorage.setItem("canvasData", JSON.stringify(this.componentData))
        // localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData))
        // this.$message.success("保存成功")
    }

    // 清空画布
    clearCanvas() {
        // this.$store.commit('setCurComponent', { component: null, index: null })
        // this.$store.commit('setComponentData', [])
        // this.$store.commit('recordSnapshot')
    }

    // 组合
    compose() {
        // this.$store.commit('compose')
        // this.$store.commit('recordSnapshot')
    }

    // 拆分
    decompose() {
        // this.$store.commit('decompose')
        // this.$store.commit('recordSnapshot')
    }

    // 锁定
    lock() {
        // this.$store.commit("lock")
    }

    // 解锁
    unlock() {
        // this.$store.commit("unlock")
    }
}
</script>

<style scoped lang="scss">
    .toolbar {
        padding: 15px 10px;
        white-space: nowrap;
        overflow-x: auto;
        background: #fff;
        border-bottom: 1px solid #ddd;

        .preview {
            margin-left: 10px;
        }

        .canvas-config {
            display: inline-block;
            margin-left: 10px;
            font-size: 14px;
            color: #606266;

            input {
                width: 50px;
                margin-left: 4px;
                outline: none;
                padding: 0 5px;
                border: 1px solid #ddd;
                color: #606266;
            }

            span {
                margin-left: 10px;
            }
        }

        .insert {
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #dcdfe6;
            color: #606266;
            appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            padding: 9px 15px;
            font-size: 12px;
            border-radius: 3px;
            margin-left: 10px;

            &:active {
                color: #3a8ee6;
                border-color: #3a8ee6;
                outline: 0;
            }

            &:hover {
                background-color: #ecf5ff;
                color: #3a8ee6;
            }
        }
    }
</style>
