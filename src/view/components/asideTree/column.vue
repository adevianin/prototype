<template>
    <div style="border: solid 1px">
        <div>column {{ column.id }}</div>
        <Element v-bind:element="column.element"></Element>
    </div>
</template>

<script>
import Element from './element.vue';

export default {
    props: ['column'],
    components: {
        Element
    },
}
</script>
