import { initViewLayer } from './view';
import { domainFacade } from './domain';
import pageData from './pageData';

domainFacade.initPage(pageData);

// останній параметр(domainFacade.getPage()) не використовується, хз як його передать у Vue правильно. заімпортив напряму в файлі src/view/components/app.vue:9
// але так менш очевидно
initViewLayer(document.getElementById('app'), domainFacade.getPage());