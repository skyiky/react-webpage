import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    render() {
        return (
            <div className="Item">
                {this.props.itemName}
                <input
                    className="item-edit-btn"
                    type="submit"
                    value="Edit"
                    onClick={this.props.itemEdit}
                />
                <input
                    className="item-delete-btn"
                    type="submit"
                    value="X"
                    onClick={this.props.itemDelete}
                />
            </div>
        );
    }
}

Item.propTypes = {
    itemName: PropTypes.string,
    itemDelete: PropTypes.func,
    itemEdit: PropTypes.func,
};

export default Item;