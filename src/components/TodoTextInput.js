import React, { Component } from 'react';

const ENTER_KEY_CODE = 13;

class TodoTextInput extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {

  }

  handleChange = event => {

  }

  render() {
    return (
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
      />
    );
  }
}

export default TodoTextInput;
