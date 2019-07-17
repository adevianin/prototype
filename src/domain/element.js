class Element {

    constructor(attrs) {
        this.id = attrs.id;
        this.color = attrs.color;
    }

    save() {
        console.log('saving ajax', {id: this.id, color: this.color});
        //ajax here
    }
}

export {
    Element
}