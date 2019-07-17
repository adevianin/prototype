import { PageFactory } from './pageFactory';
import { DomainFacade } from './domainFacade';

let pageFactory = new PageFactory();
let domainFacade = new DomainFacade(pageFactory);

export {
    domainFacade
}