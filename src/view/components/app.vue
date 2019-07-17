<template>
    <div style="display: flex">
        <div style="width:20%">
            <AsidePanel></AsidePanel>
            <AsideTree :page="page"></AsideTree>
        </div>
        <div style="width:80%">
            <Page :page="page"></Page>
        </div>
        
        
    </div>
</template>

<script>
import { domainFacade } from '../../domain';
import Page from './page.vue';
import AsidePanel from './asidePanel.vue';
import AsideTree from './asideTree/asideTree.vue';

export default {
    components: {
        Page,
        AsidePanel,
        AsideTree
    },
    data: function() {
        return {
            page: domainFacade.getPage()
        }
    }
}
</script>
