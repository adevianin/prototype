<template>
    <div style="border: solid 1px;">
        row view
        {{ row.id }}
        <div style="display: flex;">
            <Column v-for="column in row.columns" v-bind:key="column.id" v-bind:column="column"></Column>
        </div>
        <button @click="deleteRow">del</button>
    </div>
</template>

<script>
import Column from './column.vue';

export default {
    props: ['row'],
    components: {
        Column
    },
    methods: {
        deleteRow() {
            this.$emit('deleteRowIntent', this.row);
        }
    }
}
</script>
