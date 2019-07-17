<template>
    <div style="width:80%">
        page view
        {{ page.id }}
        <Block v-for="block in page.blocks" :key="block.id" :block="block"></Block>
    </div>
</template>

<script>
import { domainFacade } from '../../domain';
import Block from './block.vue';

export default {
    props: ['page'],
    components: {
        Block
    },
}
</script>
