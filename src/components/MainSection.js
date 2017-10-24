import React, { Component } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  render() {
    const { todos, toggleCompletedTodo } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo => {
            return (
              <TodoItem
                todo={todo}
                toggleCompletedTodo={toggleCompletedTodo}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default MainSection;
