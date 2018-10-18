import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  handleClick(evt) {
    evt.preventDefault();
    const tasks = [...this.state.tasks, this.input.value];
    this.input.value = '';
    this.setState({tasks});
  }

  updateInputValue(evt) {
    const {inputValue} = evt.target;
    this.setState({
      inputValue
    });
  }

  removeTask(i) {
    const tasks = [...this.state.tasks.slice(0, i), this.state.tasks.slice(i + 1)]
    this.setState({tasks});
  }

  render() {
    return (
      <div>
        <form>
          <input ref={node => this.input = node} type="text" placeholder="new task" />
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.tasks.map((task, i) => (
            <li key={task} onClick={() => this.removeTask.call(this, i)}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}
