class Column {
    constructor(columnJson) {
        this.id = columnJson.id;
        this.element = columnJson.element;
        this.type = 'column';
    }

    deleteElement() {
        this.element = null;
        console.log('saving ajax', {id: this.id, element: this.element});
    }
}

export {
    Column
};