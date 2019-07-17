<template>
    <div style="border: solid 3px;">
        <h3>aside tree</h3>
        <Block v-for="block in page.blocks" :key="block.id" :block="block"></Block>
    </div>
</template>

<script>
import Block from './block.vue';

export default {
    props: ['page'],
    components: {
        Block
    },
}
</script>
