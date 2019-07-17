class Element {

    constructor(attrs) {
        this.id = attrs.id;
        this.color = attrs.color;
    }

    save() {
        console.log('saving ajax');
        //ajax here
    }
}

export {
    Element
}