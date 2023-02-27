<template>
    <div class="home">
        <Toolbar></Toolbar>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Toolbar from '@/components/Toolbar.vue'

@Component({
    components: {
        Toolbar,
    },
})
export default class Home extends Vue {}
</script>
