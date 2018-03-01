import React, {Component} from 'react';
import './css/Main.css';
import ItemList from "./ItemList";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    // add item to list
    addItem(e) {
        e.preventDefault();
        if (this.state.inputValue !== '') {
            this.setState(prevState => ({
                items: this.state.items.concat(this.state.inputValue),
                inputValue: ''
            }));
        }
    }

    // remove specified item from list
    removeItem(i) {
        if (i > -1) {
            let itemsNew = this.state.items;
            itemsNew.splice(i, 1);
            this.setState(prevState => ({
                items: itemsNew
            }));
        }
    }

    // edit item in list
    editItem(e) {
        this.setState({
            inputValue: e.target.value
        });
    }


    render() {
        return (
            <div className="Main">
                <h1 className="Main__title">Grocery Shopping List</h1>
                <div className="Main__add">
                    <form onSubmit={e => this.addItem(e)}>
                        <input className="Main__add-input"
                               placeholder="Add item"
                               value={this.state.inputValue}
                               onChange={e => this.editItem(e)}
                               type="text"
                        />
                        <input className="Main__add-submit"
                               type="submit"
                               onClick={e =>this.addItem(e)}
                        />
                    </form>
                </div>
                {
                    (this.state.items.length !== 0) &&
                    <ItemList
                        items={this.state.items}
                        inputCount={this.state.items.length}
                        itemDelete={this.removeItem}
                    />
                }
            </div>
        );
    }
}

export default Main;
