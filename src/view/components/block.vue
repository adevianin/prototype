<template>
    <div style="border: solid 1px">
        block view
        {{ block.id }}
        <Row v-for="row in block.rows" v-bind:key="row.id" v-bind:row="row" @deleteRowIntent="deleteRow"></Row>
    </div>
</template>

<script>
import Row from './row.vue';

export default {
    props: ['block'],
    components: {
        Row
    },
    methods: {
        deleteRow(row) {
            this.block.deleteRow(row);
        }
    }
}
</script>
