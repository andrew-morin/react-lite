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
      ],
      nextId: 2
    }
  }

  /* Add an item to the todo list */
  addTodo = text => {
    if (text.length > 0) {
      const { todos, nextId } = this.state;
      todos.push({
        id: nextId,
        completed: false,
        text: text
      });
      this.setState({ todos, nextId: nextId + 1 });
    }
  }

  /* Remove an item from the todo list */
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
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
        <TodoTextInput addTodo={this.addTodo} />
        <MainSection
          todos={this.state.todos}
          toggleCompletedTodo={this.toggleCompletedTodo}
          deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
