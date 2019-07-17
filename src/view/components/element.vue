<template>
    <div>
        <div v-if="element">
            <div v-bind:style="{ border: 'solid 1px', color: element.color }">
                element view
                {{ element.id }}
                <button v-on:click="editElement">edit</button>
            </div>
        </div>
        <div v-if="!element">empty column</div>
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
