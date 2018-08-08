import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './list';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            list_todo: [],
            isClear: false, // ?????
        }
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img alt="" className="img-responsive" src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/15697887_172038056605790_9204508296954685379_n.jpg?_nc_cat=0&oh=bc2ac13c8b409da2c57569af1dda46e7&oe=5BF9CE68" />
                </div>
                <div className="input-bar">
                    <input
                        value={this.state.input}
                        onChange={(event) => {this.setState({input: event.target.value})}}
                        onKeyDown={this.onEnterKeyPress} />
                </div>
                <div className="list-todo">
                    <List
                        delete={this.delete}
                        todos={this.state.list_todo}
                        clear={this.clear} check={this.check}
                        isClear={this.state.isClear} />
                </div>
            </div>
        );
    };
    delete = (index) => {
        this.setState({
            list_todo: this.state.list_todo.filter((item, i) => {return i !== index})
        })
    }
    clear = () => {
        this.setState({
            list_todo: this.state.list_todo.filter(
                (item) => !item.isChecked
            ),
            isClear: true,
        })
    }
    check = (event, index) => {
        var arr = [...this.state.list_todo];
        arr[index].isChecked = event.target.checked;
        this.setState({list_todo: arr})
        // if (event.target.checked) {
        //     arr[index].isChecked = true;
        //     this.setState({
        //         list_todo: arr,
        //     })
        // }
        // else {
        //     arr[index].isChecked = false;
        //     this.setState({
        //         list_todo: arr,
        //     })
        // }
    }
    onEnterKeyPress = (event) => {
        if (event.keyCode === 13 && this.state.input !== "") {
            const newTodo = {
                value: this.state.input,
                isChecked: false
            }
            this.setState({
                list_todo: [...this.state.list_todo, newTodo],
                input: ""
            })
        }
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));