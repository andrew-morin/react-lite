import React, { Component } from "react";
import TodoTextInput from "../components/TodoTextInput";
import MainSection from "../components/MainSection";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  /* Add an item to the todo list */
  addTodo = text => {

  }

  /* Remove an item from the todo list */
  deleteTodo = id => {

  }

  /* Toggle completed state of an item in the todo list */
  toggleCompletedTodo = id => {

  }

  /* Render the todo App */
  render() {
    return (
      <div className="todoapp">
        <h1>todos</h1>
        <TodoTextInput />
        <MainSection todos={[
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
        ]}/>
      </div>
    );
  }
}
