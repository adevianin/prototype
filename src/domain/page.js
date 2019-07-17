import { observable, computed, action } from "mobx";

class Page {
    constructor(attrs) {
        this.id = attrs.id;
        this.blocks = attrs.blocks;
        this.type = 'page';
    }
}

export {
    Page
}