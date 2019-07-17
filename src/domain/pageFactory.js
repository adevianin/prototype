import { Element } from './element';
import { Column } from './column';
import { Row } from './row';
import { Block } from './block';
import { Page } from './page';

class PageFactory {

    buildPage(pageJson) {
        let blocks = pageJson.blocks.map(this._buildBlock.bind(this));
    
        return new Page({id: pageJson.id, blocks});
    }
    
    _buildBlock(blockJson) {
        let rows = blockJson.rows.map(this._buildRow.bind(this));
    
        return new Block({ id: blockJson.id, rows });
    }
    
    _buildRow(rowJson) {
        let columns = rowJson.columns.map(this._buildColumn.bind(this));
    
        return new Row({ id: rowJson.id, columns });
    }
    
    _buildColumn(columnJson) {
        let element = this._buildElement(columnJson.element);
        
        return new Column({id: columnJson.id, element});
    }
    
    _buildElement(elementJson) {
        return new Element(elementJson);
    }
}

export {
    PageFactory
};