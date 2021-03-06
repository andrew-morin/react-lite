import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { todo, toggleCompletedTodo, deleteTodo } = this.props;

    return (
      <li className={todo.completed ? 'completed' : undefined}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompletedTodo(todo.id)}
          />
          <label>{todo.text}</label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
      </li>
    );
  }
}

export default TodoItem;
