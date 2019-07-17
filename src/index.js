import { initViewLayer } from './view';
import { domainFacade } from './domain';
import pageData from './pageData';

domainFacade.initPage(pageData);

initViewLayer(document.getElementById('app'), domainFacade.getPage());