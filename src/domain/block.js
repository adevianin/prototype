class Block {
    constructor(attrs) {
        this.id = attrs.id;
        this.rows = attrs.rows;
        this.type = 'block';
    }

    deleteRow(row) {
        this.rows = this.rows.filter(r => r.id !== row.id);
        console.log('saving ajax', {id: this.id, rows: this.rows});
    }
}

export {
    Block
};