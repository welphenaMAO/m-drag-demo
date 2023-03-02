<template>
    <div
        class='shape'
        :class="{ active }"
        @click="selectCurComponent"
        @mousedown="handleMouseDownOnShape">
        <span class="iconfont icon-xiangyouxuanzhuan" ></span>
        <span class="iconfont icon-suo"></span>
        <div class="shape-point"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Shape extends Vue {
    active = 'class'
    // 点击
    selectCurComponent(e: Event) {
        console.log('111')
    }

    // 按下
    handleMouseDownOnShape(e: Event) {
        console.log('222')
    }
}
</script>

<style scoped lang="scss">
    .shape {
        position: absolute;

        &:hover {
            cursor: move;
        }
    }

    .active {
        outline: 1px solid #70c0ff;
        user-select: none;
    }

    .shape-point {
        position: absolute;
        background: #fff;
        border: 1px solid #59c7f9;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        z-index: 1;
    }

    .icon-xiangyouxuanzhuan {
        position: absolute;
        top: -34px;
        left: 50%;
        transform: translateX(-50%);
        cursor: grab;
        color: #59c7f9;
        font-size: 20px;
        font-weight: 600;

        &:active {
            cursor: grabbing;
        }
    }

    .icon-suo {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>

