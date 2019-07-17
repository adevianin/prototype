<template>
    <div v-bind:style="{ border: 'solid 1px', color: element.color }">
        element view
        {{ element.id }}
        <button v-on:click="editElement">edit</button>
    </div>
</template>

<script>
import dispatcher from '../dispatcher';

export default {
    props: ['element'],
    components: {
    },
    methods: {
        editElement() {
            dispatcher.emit('editElementIntent', this.element);
        }
    }
}
</script>
