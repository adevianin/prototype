class DomainFacade {
    constructor(pageFactory) {
        this.pageFactory = pageFactory;
    }

    initPage(pageData) {
        this._page = this.pageFactory.buildPage(pageData);
    }

    getPage() {
        return this._page;
    }
}

export {
    DomainFacade
};