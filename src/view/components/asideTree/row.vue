<template>
    <div style="border: solid 1px;">
        <div>row {{ row.id }} </div>
        <div style="display: flex;">
            <Column v-for="column in row.columns" v-bind:key="column.id" v-bind:column="column"></Column>
        </div>
    </div>
</template>

<script>
import Column from './column.vue';

export default {
    props: ['row'],
    components: {
        Column
    },
}
</script>
