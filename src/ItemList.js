import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from "./Item";

class ItemList extends Component {
    render() {
        let items = [];

        for (let i = 0; i < this.props.inputCount; i++) {
            items.push(
                <li className="item-list__li" key={i}>
                    <Item
                        //itemEdit={}
                        itemDelete={() => this.props.itemDelete(i)}
                        itemName={this.props.items[i]}
                    />
                </li>
            )
        }

        return (
            <div className="item-list">
                <ul className="item-list__ul">
                    {items}
                </ul>
            </div>
        );
    }
}

ItemList.propTypes = {
    items: PropTypes.array,
    inputCount: PropTypes.number,
    itemDelete: PropTypes.func,
};

export default ItemList;