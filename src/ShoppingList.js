import React, {Component} from 'react';
import ItemComponent from "./ItemComponent";

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            items: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick() {
        if (this.state.inputValue !== '') {
            this.setState(prevState => ({
                items: this.state.items.concat(this.state.inputValue),
                inputValue: ''
            }));
        }
    }

    handleDelete(item) {
        var index = this.state.items.indexOf(item);
        if (index > -1) {
            this.setState(prevState => ({
                items: this.state.items.splice(index, 1),
            }));
        }
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        var itemList = [];
        this.state.items.forEach(function(item) {
            itemList.push(
                <li className="SL-items" key={item}>
                    <ItemComponent
                        itemName={item}
                        callbackDelete={this.handleClick()}
                    />
                </li>);
        });

        return (
            <div className="SL">
                <input className="SL-input-box"
                       placeholder="Add item"
                       value={this.state.inputValue}
                       onChange={evt => this.updateInputValue(evt)}
                       type="text"
                />
                <input className="SL-submit-btn"
                       type="submit"
                       onClick={this.handleClick}
                />
                {
                    (this.state.items.length !== 0) &&
                    <ul className="SL-item-list">
                        {itemList}
                    </ul>
                }
            </div>
        );
    }
}

export default ShoppingList;