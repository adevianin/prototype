import Vue from 'vue';

import App from './components/app.vue';

function initViewLayer(el, page) {
    new Vue({
        el,
        render: h => h(App),
    });
}

export {
    initViewLayer
};