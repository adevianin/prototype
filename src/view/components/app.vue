<template>
    <div>
        <AsidePanel></AsidePanel>
        <Page v-bind:page="page"></Page>
    </div>
</template>

<script>
import { domainFacade } from '../../domain';
import Page from './page.vue';
import AsidePanel from './asidePanel.vue';

export default {
    components: {
        Page,
        AsidePanel
    },
    data: function() {
        return {
            page: domainFacade.getPage()
        }
    }
}
</script>
