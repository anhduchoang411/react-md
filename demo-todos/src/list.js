import React, { Component } from 'react';
import Item from './item';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClick: "all",
        }
    }
    render() {
        return (
            <ul className="list-group">
                {this.props.todos.map((item, index) => {
                    return(
                       <Item
                        key={index}
                        item={item}
                        index={index}
                        check={this.props.check}
                        delete={this.props.delete}
                        isClick={this.state.isClick}
                        isClear={this.props.isClear} /> 
                    );  
                })}
                <li className="menu">
                    <div 
                        className={this.props.isClear ? "item-menu curent" : (this.state.isClick === "all") ? "item-menu current" : "item-menu"} 
                        onClick={this.clickItemAll}>
                        All
                    </div>
                    <div 
                        className={(this.state.isClick === "active") ? "item-menu current" : "item-menu"}  
                        onClick={this.clickItemActive}>
                        Active
                    </div>
                    <div 
                        className={(this.state.isClick === "completed") ? "item-menu current" : "item-menu"}
                        onClick={this.clickItemCompleted}>
                        Completed
                    </div>
                    <div 
                        className="item-menu" 
                        onClick={this.props.clear}>
                        Clear Completed
                    </div>
                </li>
            </ul>
        );
    };
    clickItemAll = () => {
        this.setState({
            isClick: "all"
        })
    }
    clickItemActive = () => {
        this.setState({
            isClick: "active"
        })
    }
    clickItemCompleted = () => {
        this.setState({
            isClick: "completed"
        })
    }
}