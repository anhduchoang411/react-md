import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            (this.props.isClick === "all") ?
                <li className={this.props.item.isChecked ? "checked" : "unchecked"}>
                    <input
                        type="checkbox"
                        checked={this.props.item.isChecked ? "checked" : null}
                        onClick={(event) => {this.props.check(event, this.props.index)}} />
                    {this.props.item.value}
                    <img
                        alt=""
                        src="https://png.icons8.com/metro/1600/delete-sign.png"
                        onClick={() => this.props.delete(this.props.index)} />
                </li> :
                (this.props.isClick === "active") ?
                    <li className={this.props.item.isChecked ? "hidden" : "unchecked"}>
                        <input
                            type="checkbox"
                            onClick={this.props.check} />
                        {this.props.item.value}
                        <img
                            alt=""
                            src="https://png.icons8.com/metro/1600/delete-sign.png"
                            onClick={this.props.check} />
                    </li> :
                    <li className={this.props.item.isChecked ? "checked" : "hidden"}>
                        <input
                            type="checkbox"
                            onClick={this.props.check} />
                        {this.props.item.value}
                        <img
                            alt=""
                            src="https://png.icons8.com/metro/1600/delete-sign.png"
                            onClick={this.props.check} />
                    </li>
        );
    };
    codingcheck = () => {
        console.log(this.props.item);
    }
}