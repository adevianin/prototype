<template>
    <div>
        <div v-if="element">
            <div v-bind:style="{ border: 'solid 1px', color: element.color }">
                element {{ element.id }}
            </div>
        </div>
        <div v-if="!element">empty column</div>
    </div>
</template>

<script>
export default {
    props: ['element'],
    components: {
    },
    methods: {
    }
}
</script>
