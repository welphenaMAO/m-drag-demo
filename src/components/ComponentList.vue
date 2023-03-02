<template>
    <div class="component-list" @dragstart="handleDragStart">
        <div
            v-for="(item, index) in componentList"
            :key="index"
            class="list"
            draggable
            :data-index="index">
            <span v-if="item.icon.substr(0,2) === 'el'" :class="item.icon"></span>
            <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import componentList from '@/custom-component/component-list'

@Component
export default class ComponentList extends Vue {
    componentList = componentList

    handleDragStart(e: any) {
        e.dataTransfer.setData('index', e.target.dataset.index)
    }
}
</script>

<style scoped lang="scss">
.component-list {
    height: 65%;
    padding: 10px;
    display: grid;
    grid-gap: 10px 19px;
    grid-template-columns: repeat(auto-fill, 80px);
    grid-template-rows: repeat(auto-fill, 40px);

    .list {
        width: 80px;
        height: 40px;
        border: 1px solid #ddd;
        cursor: grab;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:active {
            cursor: grabbing;
        }

        .iconfont {
            margin-right: 4px;
            font-size: 20px;
        }

        .icon-wenben,
        .icon-biaoge {
            font-size: 18px;
        }

        .icon-tupian {
            font-size: 16px;
        }
    }
}
</style>
