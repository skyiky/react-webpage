import React, {Component} from 'react';

import './App.css';
import ShoppingList from "./ShoppingList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Grocery Shopping List</h1>
                <ShoppingList/>
            </div>
        );
    }
}

export default App;
