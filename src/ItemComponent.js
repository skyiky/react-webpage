import React, {Component} from 'react';

class ItemComponent extends Component {

    render() {
        return (
            <div>
                {this.props.itemName}

                <input
                    className="IC-remove-btn"
                    type="submit"
                    value="Remove"
                    onClick={this.props.callbackDelete}
                />
            </div>
        );
    }
}

export default ItemComponent;