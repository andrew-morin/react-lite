import React, { Component } from "react";
import TodoTextInput from "../components/TodoTextInput";
import MainSection from "../components/MainSection";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          text: 'Attend React Workshop',
          completed: true,
        },
        {
          id: 1,
          text: 'Make React App',
          completed: false
        }
      ]
    }
  }

  /* Add an item to the todo list */
  addTodo = text => {

  }

  /* Remove an item from the todo list */
  deleteTodo = id => {

  }

  /* Toggle completed state of an item in the todo list */
  toggleCompletedTodo = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  }

  /* Render the todo App */
  render() {
    return (
      <div className="todoapp">
        <h1>todos</h1>
        <TodoTextInput />
        <MainSection
          todos={this.state.todos}
          toggleCompletedTodo={this.toggleCompletedTodo} />
      </div>
    );
  }
}
