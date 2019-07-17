<template>
    <div style="border: solid 1px">
        column view
        {{ column.id }}
        <Element v-bind:element="column.element" @elementDelIntent="deleteElement"></Element>
    </div>
</template>

<script>
import Element from './element.vue';

export default {
    props: ['column'],
    components: {
        Element
    },
    methods: {
        deleteElement(element) {
            this.column.deleteElement();
        }
    }
}
</script>
