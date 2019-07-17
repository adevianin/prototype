<template>
    <div style="border:solid 3px;">
        aside panel
        <div v-if="currentElement">
            <div>id: {{ currentElement.id }}</div>
            <div>color: <input v-model="currentColor"> </div>
            <button @click="closeEditing()">close</button>
            <button @click="applyEditing()">apply</button>
        </div>
    </div>
</template>

<script>
import dispatcher from '../dispatcher';

export default {
    components: {
    },
    data() {
        return {
            currentElement: null
        }
    },
    created() {
        dispatcher.on('editElementIntent', this.putElement);
    },
    methods: {
        putElement(element) {
            this.currentElement = element;
            this.currentColor = element.color;
        },
        closeEditing() {
            this.currentElement = null;
        },
        applyEditing() {
            this.currentElement.color = this.currentColor;
        }
    }
    
}
</script>
