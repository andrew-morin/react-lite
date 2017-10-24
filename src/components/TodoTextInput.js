import React, { Component } from 'react';

const ENTER_KEY_CODE = 13;

class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSubmit = event => {
    // event.which tells us what key triggered the event
    if (event.which === ENTER_KEY_CODE) {
      const text = event.target.value.trim();
      this.props.addTodo(text);
      this.setState({ text: '' });
    }
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;
