<template>
    <div style="border: solid 1px">
        <div>block {{ block.id }}</div>
        <Row v-for="row in block.rows" v-bind:key="row.id" v-bind:row="row"></Row>
    </div>
</template>

<script>
import Row from './row.vue';

export default {
    props: ['block'],
    components: {
        Row
    },
}
</script>
