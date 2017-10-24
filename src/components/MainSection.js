import React, { Component } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          <TodoItem />
        </ul>
      </section>
    );
  }
}

export default MainSection;
